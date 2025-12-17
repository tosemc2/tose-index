document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/fanart4.jpeg'
  ];

  let currentIndex = 0;

  const slideImage = document.querySelector('.slide-image');
  const prevBtn = document.querySelector('.btn.prev');
  const nextBtn = document.querySelector('.btn.next');

  function showImage(index) {
    // 配列の範囲内に丸め込む
    if (index < 0) {
      currentIndex = images.length - 1;
    } else if (index >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slideImage.src = images[currentIndex];
  }

  prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
  });

  // 初期表示
  showImage(currentIndex);
});