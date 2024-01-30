const menubar = document.getElementById('menubar');
const menulist = document.querySelector('.menulist');
const bar = document.querySelector('.menubar');
const main = document.querySelectorAll('.show');
let navbar = document.getElementById('navbar');
const fade = document.querySelectorAll('.imageAnim');
const apply = document.getElementById('apply');
const register = document.getElementById('register');
const investment = document.getElementById('investment');
const popup1 = document.getElementById('popup1');
const close1 = document.getElementById('close1');
const bank__account = document.getElementById('bank__account');
const popup2 = document.getElementById('popup2');
const close2 = document.getElementById('close2');
const investnow = document.getElementById('investnow');
const popup3 = document.getElementById('popup3');
const close3 = document.getElementById('close3');
const lang__button = document.querySelector('.lang__button');
const globe = document.querySelector('.fa-globe');
let i = 0;
const japan = document.getElementById('japanese');

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
    popup1.classList.toggle('pop');
})

close1.addEventListener('click', () => {
    popup1.classList.toggle('pop');
})

bank__account.addEventListener('click', () => {
    popup2.classList.toggle('pop1');
})

close2.addEventListener('click', () => {
    popup2.classList.toggle('pop1');
})

investnow.addEventListener('click', () => {
    popup3.classList.toggle('pop3');
})

close3.addEventListener('click', () => {
    popup3.classList.toggle('pop3');
})

lang__button.addEventListener('click', () => {
    globe.classList.toggle('rotate');
})

japan.addEventListener('click', () => {
    console.log('testing');
    window.location.href = 'japanese.html';
})