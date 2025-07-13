 // Not usable v1.0.0
  (function () {
    const toggle = document.getElementById('toggle');

    // استرجاع الحالة المحفوظة من الكوكيز
    function getThemeFromCookie() {
      const match = document.cookie.match(/theme=(light|dark)/);
      return match ? match[1] : 'light';
    }

    // حفظ الحالة في الكوكيز
    function setThemeCookie(theme) {
      document.cookie = `theme=${theme}; path=/; max-age=31536000`;
    }

    // تغيير الثيم
    function applyTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.checked = true;
      } else {
        document.documentElement.removeAttribute('data-theme');
        toggle.checked = false;
      }
      setThemeCookie(theme);
    }

    // عند تغيير السويتش
    toggle.addEventListener('change', function () {
      const theme = this.checked ? 'dark' : 'light';
      applyTheme(theme);
    });

    // عند التحميل: طبق الثيم المحفوظ
    applyTheme(getThemeFromCookie());
  })();
