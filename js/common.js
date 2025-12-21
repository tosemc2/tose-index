const header = document.querySelector('.site-header');
document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);

// ハンバーガーと nav の取得
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');

// ハンバーガークリックで nav 開閉
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// クリックで nav を閉じたい場合（スマホでリンクを押したら閉じる）
const navLinks = nav ? nav.querySelectorAll('a') : [];
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    }
  });
});
