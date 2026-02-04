console.log(
  document.querySelectorAll('.js-smooth[href^="#"]').length
);


(() => {
  // フォーム送信制御
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      const last = localStorage.getItem("lastSubmit");

      if (last && Date.now() - last < 60000) {
        alert("送信間隔を空けてください。");
        event.preventDefault();
        return;
      }

      localStorage.setItem("lastSubmit", Date.now());
    });
  }
});