
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!event.target.elements.email.value.trim() || !event.target.elements.password.value.trim()) {
        alert('All form fields must be filled in');
        return;
    } else {
        console.log('Email: ' +  event.target.elements.email.value.trim());
        console.log('Password: ' +  event.target.elements.password.value.trim());
    }
    formEl.reset()
})