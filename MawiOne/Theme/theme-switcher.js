 // Not usable v2.0.0
  (function () {
  const toggle = document.getElementById('toggle');

  // استرجاع الثيم من الكوكيز أو ارجاع 'dark' كافتراضي
  function getThemeFromCookie() {
    const match = document.cookie.match(/theme=(light|dark)/);
    return match ? match[1] : 'dark';
  }

  // حفظ الثيم في الكوكيز لمدة سنة
  function setThemeCookie(theme) {
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }

  // تطبيق الثيم على الجذر (html)
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggle.checked = false; // لأن الوضع الداكن هو الافتراضي (السويتش غير مفعّل)
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggle.checked = true; // الوضع الفاتح (السويتش مفعّل)
    }
    setThemeCookie(theme);
  }

  // عند التبديل بالسويتش
  toggle.addEventListener('change', function () {
    const theme = this.checked ? 'light' : 'dark';
    applyTheme(theme);
  });

  // عند تحميل الصفحة: طبّق الثيم المحفوظ أو الافتراضي
  const savedTheme = getThemeFromCookie();
  applyTheme(savedTheme);
})();
