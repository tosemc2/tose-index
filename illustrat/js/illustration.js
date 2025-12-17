// js/illustration.js

// モーダル関連
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// すべての画像にクリックイベントを追加
document.querySelectorAll(".images img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// 閉じるボタン
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// モーダル外クリックで閉じる
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};