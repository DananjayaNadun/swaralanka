// ══════════════════════════════════════════════════════
//  SwaraLanka — Firebase Configuration
//  TO CONNECT FIREBASE:
//  1. Go to https://console.firebase.google.com
//  2. Create project "swaralanka"
//  3. Click Web app icon (</>)
//  4. Copy your firebaseConfig object and paste below
// ══════════════════════════════════════════════════════

const FIREBASE_CONFIG = null; // ← paste your config object here when ready

// ── LOCAL STATE (works without Firebase) ──────────────
const SL = {
  user: JSON.parse(localStorage.getItem('sl_user') || 'null'),
  favs: JSON.parse(localStorage.getItem('sl_favs') || '[]'),
  requests: JSON.parse(localStorage.getItem('sl_requests') || '[]'),

  // Auth
  login(name, email) {
    this.user = { name, email, uid: 'local_' + Date.now(), photo: null };
    localStorage.setItem('sl_user', JSON.stringify(this.user));
    document.dispatchEvent(new CustomEvent('sl:authchange', { detail: this.user }));
    return this.user;
  },
  logout() {
    this.user = null;
    localStorage.removeItem('sl_user');
    document.dispatchEvent(new CustomEvent('sl:authchange', { detail: null }));
  },
  isLoggedIn() { return !!this.user; },

  // Favourites
  isFav(songId) { return this.favs.includes(songId); },
  toggleFav(songId) {
    const idx = this.favs.indexOf(songId);
    if (idx === -1) this.favs.push(songId);
    else this.favs.splice(idx, 1);
    localStorage.setItem('sl_favs', JSON.stringify(this.favs));
    document.dispatchEvent(new CustomEvent('sl:favchange', { detail: { songId, added: idx === -1 } }));
    return idx === -1;
  },
  getFavSongs() { return SONGS.filter(s => this.favs.includes(s.id)); },

  // Requests
  addRequest(req) {
    const r = { ...req, id: Date.now(), date: new Date().toLocaleDateString(), status: 'pending', votes: 1 };
    this.requests.unshift(r);
    localStorage.setItem('sl_requests', JSON.stringify(this.requests));
    return r;
  },
  getRequests() { return this.requests; },
  voteRequest(id) {
    const r = this.requests.find(x => x.id === id);
    if (r) { r.votes = (r.votes || 1) + 1; localStorage.setItem('sl_requests', JSON.stringify(this.requests)); }
    return r;
  },

  // Submissions
  addSubmission(sub) {
    const subs = JSON.parse(localStorage.getItem('sl_submissions') || '[]');
    subs.unshift({ ...sub, id: Date.now(), date: new Date().toLocaleDateString(), status: 'review' });
    localStorage.setItem('sl_submissions', JSON.stringify(subs));
  }
};

// ── NAV AUTH STATE ─────────────────────────────────────
function updateNavAuth() {
  const loginBtn = document.getElementById('navLoginBtn');
  const registerBtn = document.getElementById('navRegisterBtn');
  const userMenu = document.getElementById('navUserMenu');
  const userName = document.getElementById('navUserName');
  if (!loginBtn) return;
  if (SL.isLoggedIn()) {
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';
    if (userName) userName.textContent = SL.user.name.split(' ')[0];
  } else {
    loginBtn.style.display = '';
    registerBtn.style.display = '';
    if (userMenu) userMenu.style.display = 'none';
  }
}
document.addEventListener('sl:authchange', updateNavAuth);
document.addEventListener('DOMContentLoaded', updateNavAuth);
