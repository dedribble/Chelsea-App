const menuBtns = document.querySelectorAll('.menu');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtns.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active');
    })
})