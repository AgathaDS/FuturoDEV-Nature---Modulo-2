document.getElementById('startButton').addEventListener('click', function() {
    let userName = prompt("Por favor, insira seu nome:");

    let messageDiv = document.getElementById('message');

    if (!userName) {
        messageDiv.textContent = "Erro: Você não inseriu um nome.";
        messageDiv.classList.remove('success');
        messageDiv.classList.add('error');
        messageDiv.style.display = 'block';
    } else {
        let userConfirmed = confirm(`Olá, ${userName}! Você deseja continuar?`);

        if (userConfirmed) {
            messageDiv.textContent = `Bem-vindo, ${userName}! Vamos continuar.`;
            messageDiv.classList.remove('error');
            messageDiv.classList.add('success');
        } else {
            messageDiv.textContent = `Tchau, ${userName}. Obrigado pela visita.`;
            messageDiv.classList.remove('success');
            messageDiv.classList.add('error');
        }
        messageDiv.style.display = 'block';
    }
});
