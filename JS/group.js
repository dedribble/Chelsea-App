const rank = document.querySelectorAll('.card');
const schedule = document.querySelectorAll('.group');

rank.forEach(btn => {
    btn.addEventListener('click', ()=> {
        rank.forEach(btn => btn.classList.remove('active'))
        btn.classList.add('active');
       
       schedule.forEach(press => {
           press.classList.remove('active');
            
           
        
       })
       press.classList.add('active')
    })
})

