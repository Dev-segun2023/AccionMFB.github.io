let menuBar = document.querySelector('.bars');
let aside = document.querySelector('.aside');
menuBar.addEventListener('click', () => {
  // Toggle the 'active' class to apply or remove the transition
  aside.classList.toggle('active');
});

let cancel = document.querySelector('.close');
let popover = document.querySelector('.popover');

setTimeout(() => {
  popover.style.display = 'block';
 }, 5000);

 window.onclick = () => {
  popover.style.display = 'none';
}

cancel.addEventListener('click', () => {
  popover.style.display = 'none';
})