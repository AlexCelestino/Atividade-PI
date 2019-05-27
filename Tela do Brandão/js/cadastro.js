function voltarLogin() {
    window.location = 'index.html';
}

function cadastrar() {
    if(nome.value == '' || email.value == '' || senha.value == '' || confirmar.value == '') {
        alert('Preencha todos os campos!')
    }
    else {
        alert('Usuário Cadastrado');
        window.location = 'index.html';
    }
}