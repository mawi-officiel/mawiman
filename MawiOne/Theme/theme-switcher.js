// Not usable
(function () {
  const themes = {
    light: "https://mawi-officiel.github.io/mawiman/MawiOne/Theme/light.css",
    dark: "https://mawi-officiel.github.io/mawiman/MawiOne/Theme/dark.css"
  };

  const defaultTheme = "light";
  const toggle = document.getElementById("toggle");

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  }

  function applyTheme(themeName) {
    const oldLink = document.getElementById("theme-css");
    if (oldLink) oldLink.remove();

    const link = document.createElement("link");
    link.id = "theme-css";
    link.rel = "stylesheet";
    link.href = themes[themeName];
    document.head.appendChild(link);

    setCookie("theme", themeName, 30);
    toggle.checked = themeName === "dark";
  }

  toggle.addEventListener("change", function () {
    applyTheme(this.checked ? "dark" : "light");
  });
  // عند بداية الصفحة
  const savedTheme = getCookie("theme") || defaultTheme;
  applyTheme(savedTheme);
})();
