const form = document.getElementById('cadastroForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

let formularioValido = true;

const nome = document.getElementById('nome').value;
const endereco = document.getElementById('endereco').value;
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;
const repitaSenha = document.getElementById('Rsenha').value;

    const erros = document.querySelectorAll('.error-message');
    erros.forEach(erro => erro.textContent = '');

if (nome.length < 3) {
    document.getElementById('erro-nome').textContent = 'O campo nome deve ter pelo menos 3 caracteres!';
    formularioValido = false;
}

if (endereco.length < 6) {
    document.getElementById('erro-endereco').textContent = 'O campo endereço deve ter pelo menos 6 caracteres!';
    formularioValido = false;
}

if (!email.includes('@') || !email.includes('.com')) {
    document.getElementById('erro-email').textContent = 'O email informado é inválido!';
    formularioValido = false;
}

if (senha.length < 6) {
    document.getElementById('erro-senha').textContent = 'A senha deve ter pelo menos 6 caracteres!';
    formularioValido = false;
}

if (senha !== repitaSenha) {
    document.getElementById('erro-repitaSenha').textContent = 'As senhas devem ser iguais';
    formularioValido = false;
}

if (formularioValido) {
    alert('Cadastro realizado com sucesso!');
    this.reset(); 
}});