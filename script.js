const slides = [
  {
    type:"statement",
    text:"He started with just 4 employees.",
    img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"In the late 1990s, a simple question changed his life.",
    img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"Why was someone coming all the way from Europe to teach Gambians how to use a computer?",
    img:"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1600&q=80"
  },
  {
    type:"statement",
    text:"He saw an opportunity.",
    img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
  },
  {
    type:"statement",
    text:"So he started teaching people computing.",
    img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
  },
  {
    type:"statement",
    text:"That small idea became QuantumNet.",
    img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"Then came telecommunications...",
    img:"https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1600&q=80"
  },
  {
    type:"statement",
    text:"QCell.",
    img:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"And eventually, an <span class=\"highlight\">entire business ecosystem</span>.",
    img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
  },
  {
    type:"statement",
    text:"From a small computer-training operation...",
    img:"https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80"
  },
  {
    type:"narrative",
    text:"...to building businesses that expanded beyond The Gambia.",
    img:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
  },
  {
    type:"final",
    text:"What can <em>YOU</em> build from a small idea? <span class=\"flag\">🇬🇲</span>",
    img:"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80"
  }
];

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

  el.innerHTML = `
    <img class="slide-img" src="${s.img}" alt="" />
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
