
// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Theme Switcher
const themeBtn = document.getElementById('themeBtn');
let dark = true;

themeBtn.addEventListener('click', () => {
  dark = !dark;

  if(dark){
    document.body.style.background = '#050816';
    document.body.style.color = 'white';
  } else {
    document.body.style.background = '#f5f5f5';
    document.body.style.color = '#111';
  }
});

// Skill Bar Animation
const bars = document.querySelectorAll('.bar span');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.dataset.width;
    }
  });
});

bars.forEach(bar => observer.observe(bar));

// Scroll Reveal
const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(100px)';
  card.style.transition = '1s';
});

// Floating Background Particles
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i = 0; i < 100; i++){
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fillStyle = 'rgba(0,255,255,0.7)';
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// Typing Effect
const title = document.querySelector('.hero-content h2');
const original = title.innerText;
title.innerText = '';

let index = 0;

function typeEffect(){
  if(index < original.length){
    title.innerText += original[index];
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// Magnetic Button Effect
themeBtn.addEventListener('mousemove', e => {
  const rect = themeBtn.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  themeBtn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

themeBtn.addEventListener('mouseleave', () => {
  themeBtn.style.transform = 'translate(0,0)';
});

// Smooth Scroll
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    target.scrollIntoView({
      behavior:'smooth'
    });
  });
});

// Dynamic Background Glow
setInterval(() => {
  document.body.style.backgroundPosition =
    `${Math.random() * 100}% ${Math.random() * 100}%`;
}, 3000);
