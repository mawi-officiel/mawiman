// Not usable
// ?v=1.0.1 Private
(function () {
  const menu = document.createElement('div');
  menu.className = 'custom-context-menu';
  menu.innerHTML = `
    <button onclick="location.href='https://www.mawiman.com'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEig_r-FfAeOSIHBV73yJiVOuQ-BHnpuGdPUNxWfi9lUeiIdVc8BL7mc3B9MQgoMMDK-tGppFnFwoHmS4n5X8xTOriyZL-ROUWJIZ_K7albbSa-orw80wBIq14e0F_Xq5IFpFrF1D5uVWQ7dqprJaHUQLQUXlRy2Tw6sio-aHCapga-f0iKCEoMFx5mEdBc=s512" alt="">
      الصفحة الرئيسية
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/store'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEh-lbvzCoqPoDTrJKfohUesEBG4W316j7E2oejEwcY1Y9P9DMyVhrYtM52wsQllQNL2ZEyVXc4-OzFJ5Y_jhsfiisLzC_pNGEYDNUBfXiIYQgctFitlhGLAbeqo_KK5MCWA8HB4pAUkTF7E1bzbd-Qjetqk0AgmxkTj21TlpiA61FSq3isspJKC7pZsiFQ=s512">
      المتجر
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/apps'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEifWjr-kYTNpZKmWSCljYjCvhHWVAq0k0k80fX3_aEm_Jg3eMt7mbbeAzKIo4sVhDNZaF8JySYJ5dCLMgpMMK-QKKKwr3iQAIDIIQy3tl7Vp7G7PmgVZvYPxcGIjFTSPW2TigKh6wOhCbnMj96cA1YPwARInRGMjIQb20csEhoxcyV6E-7DtsjBXenpl6o=s150">
      التطبيقات
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/projects'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiDt1qVCSQGLWlbfOvwj6Gx0T372jo7JarrtezQjJuJxHz7vm0Zn-z_eK9VOOw6PlraSyek39Au6xehkDFIOq4KCFbpqBsFKrjupZ9VSusJtOU9iJpkssxrOgGtPvLERomRuXx241h_Qy78xo9Bsaze71EmPmw3jzJeC6bLmP5Ha0xsaBzNN3L1cUm2oss=s512">
      المشاريع
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/courses'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjqYcNdniIbf75zezlrHEYJdAjPGHfdb90Ixh56gwyRPkgcKR7sbY_x5fJ5sjwS-DI4U28szu4wbIngLhQwf5-OwufKJzrp8KD_QhoqsQfgUd-wMd-I8viAp6Sm4YC6K6xhaTRYUOdm-O7huTS0gz7vtKYErQUaVbfSQUT-3bTzdDRC9suqGAzcrRF0VA0=s512">
      الكورسات
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/blogs'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjTa7ctJO4zTCPupouBm9g21Z-3rNInjlzCLscGgo_9chr38ggtFqSJVNCRyWTI_AXh-t7YaQWsbnoJJ4g0MljNlriWPSHzb6dKChAZHRAoo-lPHCGnK8t4xAI8j04r4d-ohoTIQBgDLU-600axshzQu75vSASG2Z7wn4m9qcTTPLdI8vG4J9Hmq26ZNm8=s512">
      المدوّنة
    </button>
    <button onclick="location.href='https://www.mawiman.com/search/label/digital-income'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhay_6sAz1fmmlFOSa7BpyxDjIk1-_V9qHCjXgl3Z3YZESQBw-woyc7AiVRs-QC-JP7HYSia2njNX8xKKExLePOahG_uKTFV_OS4Pu_O8RbnGAD4kSEQMqpnM3rRTFeGRnbD5AqLIWCCvSj-Pd_yuoT-rzkGMXGgKUKdgVS_BEqKYVw3POCfVFFUEM3nao=s512">
      الدخل الرقمي
    </button>
    <hr style="margin:6px 0;border:none;border-top:1px solid #1094f4;">
    <button onclick="location.href='https://www.mawiman.com/p/about-me.html'">
      <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgBzB7YseXF5nfvkOA5iIaFYAqOTuj5NYAh9HXeiEFEWknSOjB0ozEK7OqsMREVEfHb3seK1xHPD027MUwL-o1BS0iFqBeUMakTr7vwQBm2Htd___zPjldoYudQdxN8susEdLd7PAKWCvM-xpAdUrbsw83jvNg310L9kadiUfkZF4GfF8KFaeH5QKsj5-s=s80" alt="">
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
    const menuWidth = menu.offsetWidth || 220;
    const menuHeight = menu.offsetHeight || 300;
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
