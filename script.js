// ═════════════════════════════════════════════════════════════════════════
// ENGINE — generic slideshow logic, shared across all success-story projects.
// Don't put story content here. Edit slides-data.js instead.
// Expects `slides` and `IMAGE_BASE_PATH` to already be defined by slides-data.js,
// which must be loaded via <script> BEFORE this file in index.html.
// ═════════════════════════════════════════════════════════════════════════

function resolveImageSrc(path){
  if(!path) return "";
  // Full remote URL (http/https) or protocol-relative URL
  if(/^(https?:)?\/\//i.test(path)) return path;
  // Already absolute or explicitly relative — use as-is
  if(path.startsWith("/") || path.startsWith("./") || path.startsWith("../")) return path;
  // data: URIs (embedded images) — use as-is
  if(path.startsWith("data:")) return path;
  // Otherwise treat it as a local filename/path inside IMAGE_BASE_PATH
  return IMAGE_BASE_PATH + path;
}

const frame = document.getElementById('frame');
const timeline = document.getElementById('timeline');
let current = 0;
let autoTimer = null;
const AUTO_MS = 5500;

slides.forEach((s, i) => {
  const el = document.createElement('div');
  el.className = 'slide' + (s.type === 'final' ? ' final' : '');
  el.dataset.index = i;

  const textClass = s.type === 'narrative' ? 'narrative' : 'statement';

  const imgSrc = resolveImageSrc(s.img);

  el.innerHTML = `
    <img class="slide-img" src="${imgSrc}" alt="" onerror="this.onerror=null;this.classList.add('img-missing');console.warn('Slide ${i+1}: image failed to load ->', '${imgSrc}');" />
    <div class="scrim"></div>
    <div class="grain"></div>
    <div class="vignette"></div>
    <div class="meta-bar">
      <div class="timecode">${String(i+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}</div>
    </div>
    <div class="caption">
      <div class="caption-inner">
        <div class="${textClass}">${s.text}</div>
      </div>
    </div>
  `;
  frame.appendChild(el);

  const tick = document.createElement('div');
  tick.className = 'tick';
  tick.dataset.index = i;
  tick.addEventListener('click', () => goTo(i));
  timeline.appendChild(tick);
});

const slideEls = frame.querySelectorAll('.slide');
const tickEls = timeline.querySelectorAll('.tick');

function render(){
  slideEls.forEach((el, i) => el.classList.toggle('active', i === current));
  tickEls.forEach((t, i) => {
    t.classList.remove('current','done');
    if(i < current) t.classList.add('done');
    if(i === current) t.classList.add('current');
  });
}

function goTo(i){
  current = (i + slides.length) % slides.length;
  render();
  restartAuto();
}

function next(){ goTo(current + 1); }
function prev(){ goTo(current - 1); }

function restartAuto(){
  clearTimeout(autoTimer);
  autoTimer = setTimeout(next, AUTO_MS);
}

document.getElementById('nextBtn').addEventListener('click', next);
document.getElementById('prevBtn').addEventListener('click', prev);

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') next();
  if(e.key === 'ArrowLeft') prev();
});

// Touch swipe support
let touchStartX = 0;
document.querySelector('.stage').addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, {passive:true});
document.querySelector('.stage').addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if(dx > 50) prev();
  else if(dx < -50) next();
}, {passive:true});

render();
restartAuto();
