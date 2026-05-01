// Inject shared nav HTML
function injectNav(activePage) {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.innerHTML = `
    <a class="logo" href="index.html">
      <div class="logo-icon">🎵</div>
      <div class="logo-text">Swara<span>Lanka</span></div>
    </a>
    <div class="nav-links">
      <a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a>
      <a href="browse.html" ${activePage==='browse'?'class="active"':''}>Browse</a>
      <a href="genre.html" ${activePage==='genre'?'class="active"':''}>Genres</a>
      <a href="artist.html" ${activePage==='artist'?'class="active"':''}>Artists</a>
      <a href="request.html" ${activePage==='request'?'class="active"':''}>Requests</a>
    </div>
    <div class="nav-btns">
      <a href="favourites.html" id="navFavLink" style="display:none">
        <button class="btn btn-outline" style="gap:6px;display:flex;align-items:center">
          <span id="navFavCount" style="background:var(--gold);color:#0B0C18;border-radius:50px;padding:1px 7px;font-size:.7rem;font-weight:700;display:none"></span>
          ♡ Saved
        </button>
      </a>
      <a href="login.html" id="navLoginBtn"><button class="btn btn-outline">Login</button></a>
      <a href="login.html?mode=register" id="navRegisterBtn"><button class="btn btn-gold">Register Free</button></a>
      <div id="navUserMenu" style="display:none;align-items:center;gap:10px">
        <span style="font-size:.85rem;color:var(--text2)">Hi, <span id="navUserName" style="color:var(--gold);font-weight:600"></span></span>
        <a href="favourites.html"><button class="btn btn-outline" style="padding:7px 14px;font-size:.82rem">♡ Saved</button></a>
        <button class="btn btn-outline" style="padding:7px 14px;font-size:.82rem" onclick="SL.logout();location.reload()">Logout</button>
      </div>
    </div>
  `;
  updateNavAuth();
  updateNavFavCount();
}

function updateNavFavCount() {
  const count = SL.favs.length;
  const badge = document.getElementById('navFavCount');
  const link = document.getElementById('navFavLink');
  if (SL.isLoggedIn() && link) link.style.display = '';
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? '' : 'none'; }
}
document.addEventListener('sl:favchange', updateNavFavCount);
