(()=>{'use strict';const m=document.querySelector('.menu-toggle'),n=document.querySelector('.nav-list');if(m&&n){m.addEventListener('click',()=>{let open=n.classList.toggle('open');m.setAttribute('aria-expanded',String(open));m.textContent=open?'Close':'Menu'});const closeMenu=()=>{n.classList.remove('open');m.setAttribute('aria-expanded','false');m.textContent='Menu'};n.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){closeMenu();m.focus()}});document.addEventListener('pointerdown',e=>{if(n.classList.contains('open')&&!n.contains(e.target)&&!m.contains(e.target))closeMenu()});window.addEventListener('resize',()=>{if(window.innerWidth>760&&n.classList.contains('open'))closeMenu()})}document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());const els=[...document.querySelectorAll('.reveal')];if('IntersectionObserver'in window){const obs=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');obs.unobserve(item.target)}}),{threshold:.08});els.forEach(e=>obs.observe(e))}else els.forEach(e=>e.classList.add('visible'));const filterButtons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('[data-card]')],search=document.querySelector('[data-search]'),count=document.querySelector('[data-count]'),empty=document.querySelector('[data-no-results]');let active='all';const update=()=>{let q=(search?.value||'').trim().toLocaleLowerCase(),shown=0;cards.forEach(c=>{let ok=(active==='all'||c.dataset.type===active||(active==='browser'&&c.dataset.platform==='browser')||(active==='mobile'&&c.dataset.platform==='android'&&c.dataset.type==='games'))&&(c.dataset.search||'').includes(q);c.hidden=!ok;if(ok)shown++});if(count)count.textContent=`Showing ${shown} of ${cards.length} projects`;if(empty)empty.classList.toggle('visible',shown===0)};filterButtons.forEach(b=>b.addEventListener('click',()=>{active=b.dataset.filter;filterButtons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));update()}));search?.addEventListener('input',update);update()})();

// Keep YouTube completely unloaded until a visitor selects the preview.
(()=>{'use strict';document.querySelectorAll('[data-youtube-video]').forEach(button=>{
 button.addEventListener('click',()=>{
  const id=button.getAttribute('data-youtube-video');
  if(!/^[A-Za-z0-9_-]{11}$/.test(id))return;
  const parent=button.parentElement;if(!parent)return;
  const frame=document.createElement('iframe');
  frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
  frame.title='Rival Guys - Official Game Preview';
  frame.setAttribute('allow','accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share');
  frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
  frame.setAttribute('allowfullscreen','');
  parent.replaceChildren(frame);
 });
});})();
