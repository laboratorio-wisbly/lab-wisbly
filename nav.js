/* ══════════════════════════════════════════════════════════════════
   nav.js — Interacciones del navbar de Cuida 360
   - Dropdowns tipo mega-menu (hover en desktop, click en mobile)
   - Drawer lateral en mobile
   - Toggle oscuro (stub visual)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ─── DROPDOWNS ─── */
  const items = document.querySelectorAll('.nav-main-item.has-mega');
  items.forEach((item) => {
    const link = item.querySelector('.nav-main-link');
    if (!link) return;

    // Click abre/cierra
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const wasOpen = item.classList.contains('open');
      items.forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });

    // Hover (solo pointer fine, desktop)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let hoverT;
      item.addEventListener('mouseenter', () => {
        clearTimeout(hoverT);
        items.forEach((i) => { if (i !== item) i.classList.remove('open'); });
        item.classList.add('open');
      });
      item.addEventListener('mouseleave', () => {
        hoverT = setTimeout(() => item.classList.remove('open'), 150);
      });
    }
  });

  // Cerrar si se hace click fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-main-item')) {
      items.forEach((i) => i.classList.remove('open'));
    }
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') items.forEach((i) => i.classList.remove('open'));
  });

  /* ─── DRAWER (menú lateral mobile) ─── */
  const drawer = document.querySelector('.drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const burger = document.querySelector('.nav-burger');
  const closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    drawer && drawer.classList.add('open');
    backdrop && backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer && drawer.classList.remove('open');
    backdrop && backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  burger && burger.addEventListener('click', openDrawer);
  closeBtn && closeBtn.addEventListener('click', closeDrawer);
  backdrop && backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ─── DARK MODE toggle (stub visual) ─── */
  const darkBtn = document.querySelector('.topbar-dark');
  darkBtn && darkBtn.addEventListener('click', () => {
    alert('El modo oscuro se activará en la versión final. Este es solo un preview de la maqueta.');
  });
})();
