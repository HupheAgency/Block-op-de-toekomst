(function(){
  const burger = document.querySelector('[data-burger]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav){
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Simple dashboard numbers for the Groei & fases page (demo / placeholder)
  const el = document.querySelector('[data-counter]');
  if (el){
    const target = Number(el.getAttribute('data-counter')) || 0;
    let n = 0;
    const step = Math.max(1, Math.round(target/60));
    const t = setInterval(() => {
      n = Math.min(target, n + step);
      el.textContent = n.toLocaleString('nl-NL');
      if (n >= target) clearInterval(t);
    }, 18);
  }
})();
