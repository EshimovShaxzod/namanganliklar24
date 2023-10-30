var elHeaderBtn = document.querySelector('.site-header__btn');
var ElModal = document.querySelector('.modal');
var ElModalOverlay = document.querySelector('.modal-overlay');
var ElModalClose = document.querySelector('.modal-close');



elHeaderBtn.addEventListener('click', () => {
    ElModal.classList.add("show")
    ElModalOverlay.classList.add("show")
})

ElModalClose.addEventListener('click', () => {
    ElModal.classList.remove("show")
    ElModalOverlay.classList.remove("show")
})


