document.addEventListener("DOMContentLoaded",(function(){(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openSecondModalBtn:document.querySelector("[data-modal-open-second]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function o(){e.modal.classList.add("is-visible"),e.backdrop.classList.add("is-visible")}e.openModalBtn.addEventListener("click",o),e.openSecondModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",(function(){e.modal.classList.remove("is-visible"),e.backdrop.classList.remove("is-visible")}))})()}));
//# sourceMappingURL=index.2d688a05.js.map