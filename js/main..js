let btnMenu = document.getElementById('btn-menu')
let menu = document.querySelector('.ul')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('ativo')
    document.getElementById('icon-close')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('ativo')
})
