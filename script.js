// LOADER

window.addEventListener('load', () => {

  setTimeout(() => {

    document
      .getElementById('loader')
      .classList.add('hidden');

  }, 2000);

});

// CURSOR

const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');

let mx = 0;
let my = 0;

let tx = 0;
let ty = 0;

document.addEventListener('mousemove', e => {

  mx = e.clientX;
  my = e.clientY;

  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';

});

function animateTrail(){

  tx += (mx - tx - 15) * 0.12;
  ty += (my - ty - 15) * 0.12;

  trail.style.left = tx + 'px';
  trail.style.top = ty + 'px';

  requestAnimationFrame(animateTrail);

}

animateTrail();

// MOBILE MENU

function toggleMenu(){

  document
    .getElementById('mobile-menu')
    .classList.toggle('open');

}

// TYPING EFFECT

const phrases = [

  'Спілкування 24/7 🔥',
  'Nyx Coin System 🪙',
  'Toxic atmosphere ☠️',
  'Voice chat every day 🎤'

];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById('typing-text');

function typeEffect(){

  const current = phrases[phraseIndex];

  if(!deleting){

    typing.textContent =
      current.slice(0, ++charIndex);

    if(charIndex === current.length){

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  }else{

    typing.textContent =
      current.slice(0, --charIndex);

    if(charIndex === 0){

      deleting = false;

      phraseIndex =
        (phraseIndex + 1) % phrases.length;
    }

  }

  setTimeout(typeEffect, deleting ? 40 : 70);

}

setTimeout(typeEffect, 2200);

// PARTICLES

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let W;
let H;

let particles = [];

function resize(){

  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;

}

resize();

window.addEventListener('resize', resize);

for(let i = 0; i < 100; i++){

  particles.push({

    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,

    r: Math.random() * 2,

    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5

  });

}

function animateParticles(){

  ctx.clearRect(0,0,W,H);

  particles.forEach(p => {

    p.x += p.vx;
    p.y += p.vy;

    if(p.x < 0) p.x = W;
    if(p.x > W) p.x = 0;

    if(p.y < 0) p.y = H;
    if(p.y > H) p.y = 0;

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.r,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = '#a855f7';

    ctx.fill();

  });

  requestAnimationFrame(animateParticles);

}

animateParticles();

console.log("TOXIC SAVAGE LOADED");