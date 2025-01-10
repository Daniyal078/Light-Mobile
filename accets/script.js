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
    document.querySelector('.profile-sidenav').style.left = "-100%";
    document.querySelector('.mask').style.display = "none";
})

document.querySelectorAll('.profile-sidetog').forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.profile-sidenav').style.left = "0";
        document.querySelector('.mask').style.display = "block";
    })
});



document.querySelectorAll('.profile-sideClose').forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.profile-sidenav').style.left = "-100%";
        document.querySelector('.mask').style.display = "none";
    })
});



