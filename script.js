const options = document.querySelector('select');
const btn = document.querySelector('.btn-save');
const input = document.querySelector('input');

document.addEventListener('DOMContentLoaded', () => {
    input.value = options.children[0].innerHTML;
});

btn.addEventListener('click', () => {
    const selected = options.selectedIndex;
    input.value = input.value.trim();
    if (input.value.length === 0) {
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'green';
        options[selected].innerHTML = input.value;
    }
});

options.addEventListener('change', () => {
    const selected = options.selectedIndex;
    input.value = options[selected].innerHTML;
});
