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
