const frtBtn = document.querySelectorAll('.frt-box');

frtBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        frtBtn.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active');
    })
})