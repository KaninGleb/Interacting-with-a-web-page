const text = document.querySelector('.text');
const buttonAppear = document.querySelector('#appear');
const buttonDisappear = document.querySelector('#disappear');

console.log(text);

function showText() {
    text.style.display = '';
}

function hideText() {
    text.style.display = 'none';
}

buttonAppear.addEventListener('click', showText);
buttonDisappear.addEventListener('click', hideText);