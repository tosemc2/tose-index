document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault(); // ページ遷移を防ぐ

  const data = {
    category: document.getElementById("category").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  const params = new URLSearchParams(data);
  fetch("https://script.google.com/macros/s/AKfycbxvAdADEQ3CRmzU7iYb--j_fBw7YXErJsg-fL9PkF3BRyJ2qzsMu4sCYOsC5ITeJf1P/exec", { // ← コピーしたWebアプリURL
    method: "POST",
    body: params
  });
}