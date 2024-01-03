const menubar = document.getElementById('menubar');
const menulist = document.querySelector('.menulist');
const bar = document.querySelector('.menubar');
const main = document.querySelectorAll('.main1');
let navbar = document.querySelector('.navbar');

menubar.addEventListener('click', ()=>{
    bar.classList.toggle('is-active');
    menulist.classList.toggle('active');
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        navbar.classList.toggle('blacken', entry.isIntersecting)
        menulist.classList.toggle('is-black', entry.isIntersecting)
    })
}, {
    threshold: 0.5
}
)

main.forEach(container => {
    observer.observe(container)
})