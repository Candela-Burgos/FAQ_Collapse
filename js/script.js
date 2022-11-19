const faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
