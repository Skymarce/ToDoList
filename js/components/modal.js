function openModal(modalClass) {
    document.querySelector(modalClass).classList.add('show');
    document.querySelector(modalClass).classList.remove('hide');
}

function closeModal(modalClass) {
    document.querySelector(modalClass).classList.add('hide');
    document.querySelector(modalClass).classList.remove('show');
}

export {openModal, closeModal};