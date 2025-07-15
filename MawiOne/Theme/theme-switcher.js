 // Not usable v4.0.1
!function(){const t=document.getElementById("toggle");function e(e){"dark"===e?(document.documentElement.setAttribute("data-theme","dark"),t&&(t.checked=!1)):(document.documentElement.removeAttribute("data-theme"),t&&(t.checked=!0)),document.cookie=`theme=${e}; path=/; max-age=31536000`}t&&t.addEventListener("change",function(){e(this.checked?"light":"dark")});var o=(o=document.cookie.match(/theme=(light|dark)/))?o[1]:"dark";e(o);function n(){var e="mawi-protection-style",t=document.getElementById(e),t=(t&&t.remove(),document.createElement("style"));t.id=e,t.textContent=`
      body#layout::before {
        content: "MawiOne 4.0.1 Custom Edition by Mawi Man";
      }
    `,document.head.appendChild(t)}new MutationObserver(()=>{n()}).observe(document.head,{childList:!0,subtree:!0}),window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{var e;(e=document.querySelector(".copyright-text"))?e.innerHTML='Developed by ❤️ - <a href="https://www.mawiman.com/p/about-me.html">Mawi Man</a>':window.location.href="https://www.mawiman.com/p/my-products.html",n()},500)})}();
