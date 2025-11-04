// /* #region SignIn MW */
// (() => {
//   const modal = document.querySelector('[data-modal="login"]');
//   if (!modal) return;

//   const openBtns = document.querySelectorAll('[data-modal-open="login"]');
//   const closeBtns = document.querySelectorAll('[data-modal-close="login"]');

//   openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
//   closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

//   function toggleModal() {
//     modal.classList.toggle("is-open");
//   }
// })();
// /* #endregion */

// /* #region SignUp MW */
// (() => {
//   const modal = document.querySelector('[data-modal="signup"]');
//   if (!modal) return;

//   const openBtns = document.querySelectorAll('[data-modal-open="signup"]');
//   const closeBtns = document.querySelectorAll('[data-modal-close="signup"]');

//   openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
//   closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

//   function toggleModal() {
//     modal.classList.toggle("is-open");
//   }
// })();
// /* #endregion */

// /* #region getstarted MW */
// (() => {
//   const modal = document.querySelector('[data-modal="getstarted"]');
//   if (!modal) return;

//   const openBtns = document.querySelectorAll('[data-modal-open="getstarted"]');
//   const closeBtns = document.querySelectorAll(
//     '[data-modal-close="getstarted"]'
//   );

//   openBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
//   closeBtns.forEach((btn) => btn.addEventListener("click", toggleModal));

//   function toggleModal() {
//     modal.classList.toggle("is-open");
//   }
// })();
// /* #endregion */

// Универсальный обработчик всех модальных окон
document.addEventListener("DOMContentLoaded", () => {
  // Открытие модалки
  document.addEventListener("click", (event) => {
    const openBtn = event.target.closest("[data-modal-open]");
    const closeBtn = event.target.closest("[data-modal-close]");

    // Если клик по кнопке "открыть"
    if (openBtn) {
      const modalName = openBtn.dataset.modalOpen;
      const modal = document.querySelector(`[data-modal="${modalName}"]`);
      if (modal) modal.classList.add("is-open");
    }

    // Если клик по кнопке "закрыть"
    if (closeBtn) {
      const modalName = closeBtn.dataset.modalClose;
      const modal = document.querySelector(`[data-modal="${modalName}"]`);
      if (modal) modal.classList.remove("is-open");
    }
  });

  // Закрытие по клику на фон
  document.addEventListener("click", (event) => {
    const modal = event.target.closest("[data-modal].is-open");
    if (modal && event.target === modal) {
      modal.classList.remove("is-open");
    }
  });
});
