const menubar = document.getElementById('menubar');
const menulist = document.querySelector('.menulist');
const bar = document.querySelector('.menubar');
const main = document.querySelectorAll('.show');
let navbar = document.getElementById('navbar');
const fade = document.querySelectorAll('.imageAnim');
const apply = document.getElementById('apply');
const register = document.getElementById('register');
const investment = document.getElementById('investment');
const popup = document.getElementById('popup');
const close__button = document.getElementById('close__button');
const bank__account = document.getElementById('bank__account');

// console.log(bar);
// console.log(main);
// console.log(menulist);
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
    threshold: 0.01
}
)

main.forEach(container => {
    observer.observe(container)
})

const observerAnim = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('fade__up', entry.isIntersecting)
    })
})

fade.forEach(fades => {
    observerAnim.observe(fades)
})


apply.addEventListener('click', () => {
    window.location.href = 'https://forms.gle/baGEMEWkv5NvvoSZ8';
})

register.addEventListener('click', () => {
    window.location.href = 'https://forms.gle/ubkSH6SgFA827jGVA';
})

investment.addEventListener('click', () => {
    popup.classList.toggle('pop');
})

close__button.addEventListener('click', () => {
    popup.classList.toggle('pop');
})

bank__account.addEventListener('click', () => {
    popup.classList.toggle('pop');
})