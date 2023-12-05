const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    if (event.target.value.trim()) {
        outputEl.textContent = outputEl.textContent.replace(outputEl.textContent, event.target.value.trim());
    } else {
        outputEl.textContent = "Anonymous";
    }
})