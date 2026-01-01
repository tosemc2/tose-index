    const form = document.getElementById("contactForm");
    form.addEventListener("submit", () => {
      const last = localStorage.getItem("lastSubmit");
      if (last && Date.now() - last < 60000) {
        alert("送信間隔を空けてください。");
        event.preventDefault();
        return;
      }
      localStorage.setItem("lastSubmit", Date.now());
    });