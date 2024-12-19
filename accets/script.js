document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.mask').style.display = 'block'
})

document.querySelector('.nav-close').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show')
    document.querySelector('.mask').style.display = 'none'
})

document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('show')
    document.querySelector('.mask').style.display = 'none'
})



