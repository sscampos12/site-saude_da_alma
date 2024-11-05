const form = document.querySelector('.enviar-testemunho form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // (Opcional) Adicione aqui a lógica de validação do formulário e prevenção de spam

    const formData = new FormData(form); // Cria um objeto FormData com os dados do formulário

    fetch(form.action, { // Envia os dados para o script no servidor
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar testemunho. Tente novamente mais tarde.');
        }
        return response.text(); // Lê a resposta do servidor como texto
    })
    .then(message => {
        alert(message); // Exibe a mensagem de sucesso ou erro do servidor
        form.reset(); // Limpa o formulário
    })
    .catch(error => {
        alert(error.message); // Exibe uma mensagem de erro genérica em caso de falha
    });
});