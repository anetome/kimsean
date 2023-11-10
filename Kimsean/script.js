const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const hamburger = document.querySelector('.hamburger')
const navDrawer = document.querySelector('.nav-drawer')
hamburger.addEventListener('click', () => {
    bar1.classList.toggle('flip1');
    bar2.classList.toggle('hide2');
    bar3.classList.toggle('flip3');
    navDrawer.classList.toggle('open-drawer')
}
)
