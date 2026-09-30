
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');if(menu&&nav)menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const show=()=>document.querySelectorAll('.reveal').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight-60)el.classList.add('visible')});addEventListener('scroll',show,{passive:true});addEventListener('load',show);document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
document.querySelectorAll('img[data-fallback]').forEach(img=>{img.addEventListener('error',()=>{img.style.display='none'})});
const filters=document.querySelectorAll('.filter');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const key=btn.dataset.filter;document.querySelectorAll('.game-card[data-platform]').forEach(card=>{card.hidden=key!=='all'&&!card.dataset.platform.includes(key)})}));

/* ---------- Theme (dark / light) ---------- */
(function(){
  const root=document.documentElement;
  const stored=localStorage.getItem('masarp-theme');
  const apply=(mode)=>{
    root.setAttribute('data-theme',mode);
    document.querySelectorAll('.theme-btn').forEach(b=>b.classList.toggle('active',b.dataset.theme===mode));
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute('content',mode==='light'?'#f8f7f3':'#0a0a0b');
  };
  apply(stored==='light'?'light':'dark');
  document.querySelectorAll('.theme-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const mode=btn.dataset.theme;
      localStorage.setItem('masarp-theme',mode);
      apply(mode);
    });
  });
})();
