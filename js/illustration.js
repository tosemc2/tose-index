// ===== モーダル表示 =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// ギャラリー内のすべての画像を取得
const galleryImages = document.querySelectorAll(".images img");

// 画像をクリックしたらモーダル表示
galleryImages.forEach((img, index) => {
  img.dataset.index = index; // 画像のインデックスを付与（矢印機能用）
  img.addEventListener("click", () => {
    modal.style.display = "block";      // モーダルを表示
    modalImg.src = img.src;              // クリック画像を表示
    currentIndex = index;                // 現在の画像インデックスを保存
  });
});

// 閉じるボタンでモーダルを閉じる
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// モーダルの外側をクリックしても閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// ===== optional: 画像前後切替機能 =====
let currentIndex = 0;

document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowRight") { // 右矢印で次の画像
      currentIndex = (currentIndex + 1) % galleryImages.length;
      modalImg.src = galleryImages[currentIndex].src;
    } else if (e.key === "ArrowLeft") { // 左矢印で前の画像
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      modalImg.src = galleryImages[currentIndex].src;
    } else if (e.key === "Escape") { // Escで閉じる
      modal.style.display = "none";
    }
  }
});