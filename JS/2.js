// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
// На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. 
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

let modalOpen = document.querySelector(".open-modal-btn");
let modal = document.querySelector(".modal-wrapper");

modalOpen.addEventListener("click", showModal);
modal.addEventListener("click", closeModal);

function showModal() {
    modal.classList.toggle("show-modal");
}

function closeModal(e) {
    if (e.target.className == "close-modal-btn") {
        modal.classList.toggle("show-modal");
    }
}