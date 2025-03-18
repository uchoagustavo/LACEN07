document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginButton = document.getElementById('loginButton');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';


    if (username === 'admin' && password === '1234') {
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos.';
    }
});
