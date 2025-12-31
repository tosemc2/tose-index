// ヘッダー高さをCSS変数に
const header = document.querySelector('.site-header');
if (header) {
  document.documentElement.style.setProperty(
    '--header-height',
    `${header.offsetHeight}px`
  );
}

// ハンバーガーと nav
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('header-nav');

// ハンバーガークリック
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });
}

// メニューリンククリックで閉じる
if (nav) {
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
}