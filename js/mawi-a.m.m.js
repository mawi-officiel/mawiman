// Mawi A.M.M.js v=1.0.3

(function () {
  const style = document.createElement('style');
  style.textContent = `
    html { scroll-behavior: smooth; }
    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #1094f4;
      border-radius: 10px;
      transition: background 0.3s;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #0c7bd0;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
    body {
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><circle cx='12' cy='12' r='6' fill='%231094f4'/></svg>") 12 12, auto;
    }
    .ripple {
      position: fixed;
      background: radial-gradient(circle, #1094f4 10%, transparent 10.01%);
      background-size: 100% 100%;
      border-radius: 50%;
      pointer-events: none;
      width: 100px;
      height: 100px;
      transform: scale(0);
      animation: rippleAnim 0.6s ease-out forwards;
      z-index: 9999;
    }
    @keyframes rippleAnim {
      to {
        transform: scale(2.5);
        opacity: 0;
      }
    }
    .custom-context-menu {
      position: fixed;
      display: none;
      flex-direction: column;
      background: white;
      box-shadow: 0 5px 20px rgba(0,0,0,0.15);
      border-radius: 8px;
      padding: 6px;
      min-width: 200px;
      z-index: 99999;
      animation: fadeIn 0.2s ease-out;
    }
    .custom-context-menu button {
      all: unset;
      padding: 10px 12px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s, transform 0.2s;
    }
    .custom-context-menu button:hover {
      background: #f0f0f0;
      transform: scale(1.02);
    }
    .custom-context-menu svg {
      width: 18px;
      height: 18px;
      fill: #1094f4;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .wind-trail {
      position: fixed;
      width: 30px;
      height: 30px;
      background: radial-gradient(circle, rgba(16,148,244,0.25) 20%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      animation: windFade 0.8s linear forwards;
    }
    @keyframes windFade {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  const menu = document.createElement('div');
  menu.className = 'custom-context-menu';
  menu.innerHTML = `
    <button onclick="location.href='https://www.mawiman.com'">
      <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
      الصفحة الرئيسية
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/store'">
      <svg viewBox="0 0 24 24"><path d="M16 6V4H8v2H2v2h20V6zM4 10v10h16V10H4z"/></svg>
      المتجر
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/apps'">
      <svg viewBox="0 0 24 24"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>
      التطبيقات
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/projects'">
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13l-8-4v6l8 4 8-4v-6l-8 4z"/></svg>
      المشاريع
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/courses'">
      <svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h8v2H4z"/></svg>
      الكورسات
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/blogs'">
      <svg viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h10v2H4zm0 5h16v2H4z"/></svg>
      المدوّنة
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/digital-income'">
      <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 17.93V18h-2v1.93A8 8 0 014.07 13H6v-2H4.07A8 8 0 0111 4.07V6h2V4.07A8 8 0 0119.93 11H18v2h1.93A8 8 0 0113 19.93z"/></svg>
      الدخل الرقمي
    </button>
    <hr style="margin:6px 0;border:none;border-top:1px solid #eee;">
    <button onclick="location.href='https://www.mawiman.com/p/about-me.html'">
      <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      عنّي
    </button>
  `;
  document.body.appendChild(menu);

  document.addEventListener('mousedown', function (e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - 50}px`;
    ripple.style.top = `${e.clientY - 50}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });

  window.addEventListener('contextmenu', e => {
    e.preventDefault();

    menu.style.display = 'block';
    const menuWidth = menu.offsetWidth || 200;
    const menuHeight = menu.offsetHeight || 250;
    menu.style.display = 'none';

    const padding = 10;
    let left = e.clientX;
    let top = e.clientY;

    if (left + menuWidth > window.innerWidth - padding) {
      left = window.innerWidth - menuWidth - padding;
    }

    if (top + menuHeight > window.innerHeight - padding) {
      top = top - menuHeight;
      if (top < padding) top = padding;
    }

    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
    menu.style.display = 'flex';
  });

  window.addEventListener('click', () => {
    menu.style.display = 'none';
  });

  document.addEventListener('mousemove', function (e) {
    const wind = document.createElement('div');
    wind.className = 'wind-trail';
    wind.style.left = `${e.clientX - 15}px`;
    wind.style.top = `${e.clientY - 15}px`;
    document.body.appendChild(wind);
    setTimeout(() => wind.remove(), 800);
  });
})();
