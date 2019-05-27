function irCadastro() {
    window.location = 'cadastre-se.html';
}

function entrar() {
    if(login.value == 'fernando' && senha.value == 'brandão') {
        window.location = 'logado.html';
    }
    else if (login.value == '' || senha.value == '') {
        alert('Preencha todos os campos!');
    }
    else {
        alert('Login ou Senha incorretos');
    }
}