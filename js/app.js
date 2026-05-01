// ── SwaraLanka App Core ──
// Works with localStorage NOW. Swap in Firebase later by filling firebaseConfig.

const SL = {
  // ── AUTH ──
  getUser(){ try{ return JSON.parse(localStorage.getItem('sl_user'))||null; }catch{ return null; } },
  saveUser(u){ localStorage.setItem('sl_user', JSON.stringify(u)); },
  logout(){ localStorage.removeItem('sl_user'); location.href='index.html'; },

  register(name, email, password){
    const users = SL.getAllUsers();
    if(users.find(u=>u.email===email)) return {ok:false, msg:'Email already registered.'};
    const user = { id:'u_'+Date.now(), name, email, password, avatar: name.charAt(0).toUpperCase(), joined: new Date().toISOString(), favourites:[], submitted:0 };
    users.push(user);
    localStorage.setItem('sl_users', JSON.stringify(users));
    SL.saveUser(user);
    return {ok:true, user};
  },

  login(email, password){
    const users = SL.getAllUsers();
    const user = users.find(u=>u.email===email && u.password===password);
    if(!user) return {ok:false, msg:'Incorrect email or password.'};
    SL.saveUser(user);
    return {ok:true, user};
  },

  getAllUsers(){ try{ return JSON.parse(localStorage.getItem('sl_users'))||[]; }catch{ return []; } },

  updateUser(updated){
    const users = SL.getAllUsers();
    const idx = users.findIndex(u=>u.id===updated.id);
    if(idx>-1){ users[idx]=updated; localStorage.setItem('sl_users', JSON.stringify(users)); }
    SL.saveUser(updated);
  },

  // ── FAVOURITES ──
  getFavourites(){ const u=SL.getUser(); return u?u.favourites||[]:JSON.parse(localStorage.getItem('sl_favs')||'[]'); },
  isFavourite(id){ return SL.getFavourites().includes(id); },
  toggleFavourite(id){
    const u=SL.getUser();
    let favs = SL.getFavourites();
    const has = favs.includes(id);
    favs = has ? favs.filter(f=>f!==id) : [...favs, id];
    if(u){ u.favourites=favs; SL.updateUser(u); }
    else{ localStorage.setItem('sl_favs', JSON.stringify(favs)); }
    return !has;
  },

  // ── REQUESTS ──
  getRequests(){ try{ return JSON.parse(localStorage.getItem('sl_requests'))||[]; }catch{ return []; } },
  addRequest(data){
    const reqs = SL.getRequests();
    const req = { id:'r_'+Date.now(), ...data, votes:1, status:'pending', date: new Date().toISOString(), votedBy:[] };
    reqs.unshift(req);
    localStorage.setItem('sl_requests', JSON.stringify(reqs));
    return req;
  },
  voteRequest(id){
    const u = SL.getUser();
    const reqs = SL.getRequests();
    const req = reqs.find(r=>r.id===id);
    if(!req) return;
    const uid = u?u.id:('anon_'+Math.random());
    if(req.votedBy.includes(uid)) return;
    req.votes++; req.votedBy.push(uid);
    localStorage.setItem('sl_requests', JSON.stringify(reqs));
    return req.votes;
  },

  // ── SUBMISSIONS ──
  getSubmissions(){ try{ return JSON.parse(localStorage.getItem('sl_submissions'))||[]; }catch{ return []; } },
  addSubmission(data){
    const subs = SL.getSubmissions();
    const sub = { id:'s_'+Date.now(), ...data, status:'pending', date: new Date().toISOString() };
    subs.unshift(sub);
    localStorage.setItem('sl_submissions', JSON.stringify(subs));
    return sub;
  },

  // ── NAV HELPER ──
  renderNav(activePage){
    const u = SL.getUser();
    return `<nav>
      <a class="logo" href="index.html"><div class="logo-icon">🎵</div><div class="logo-text">Swara<span>Lanka</span></div></a>
      <div class="nav-links">
        <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
        <a href="browse.html" ${activePage==='browse'?'class="active"':''}>Browse</a>
        <a href="artists.html" ${activePage==='artists'?'class="active"':''}>Artists</a>
        <a href="genres.html" ${activePage==='genres'?'class="active"':''}>Genres</a>
        <a href="request.html" ${activePage==='request'?'class="active"':''}>Requests</a>
        <a href="submit.html" ${activePage==='submit'?'class="active"':''}>Submit</a>
      </div>
      <div class="nav-btns">
        ${u
          ? `<a href="dashboard.html"><button class="btn btn-outline" style="display:flex;align-items:center;gap:7px"><span style="width:24px;height:24px;background:linear-gradient(135deg,var(--gold),var(--gold-light));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;color:#0B0C18;font-weight:700">${u.avatar}</span>${u.name.split(' ')[0]}</button></a>
             <button class="btn btn-outline" onclick="SL.logout()">Logout</button>`
          : `<a href="login.html"><button class="btn btn-outline">Login</button></a>
             <a href="login.html?mode=register"><button class="btn btn-gold">Register Free</button></a>`
        }
      </div>
    </nav>`;
  }
};
