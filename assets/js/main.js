const revealEls=[...document.querySelectorAll('.reveal')];
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}})},{threshold:.14});
revealEls.forEach(el=>observer.observe(el));
const light=document.getElementById('cursorLight');
if(window.matchMedia('(pointer:fine)').matches && light){
  window.addEventListener('pointermove',(e)=>{light.style.left=e.clientX+'px';light.style.top=e.clientY+'px';light.style.opacity='.8';},{passive:true});
  window.addEventListener('mouseleave',()=>light.style.opacity='0');
}
const links=[...document.querySelectorAll('.nav a')];
const sections=[...document.querySelectorAll('main .section')];
const navObs=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.style.color='');const active=document.querySelector(`.nav a[href="#${entry.target.id}"]`);if(active)active.style.color='#fff';}})},{rootMargin:'-45% 0px -45% 0px'});
sections.forEach(s=>navObs.observe(s));
