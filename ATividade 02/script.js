const form = document.getElementById('CadastroForm');
const senhaInput = document.getElementById('senha')
const erro_senha = document.getElementById('erro-senha')
const botaoMostrar = document.getElementById('btn');


const veri_nome = () => {
    const nomeInput = document.getElementById('nome');
    const erroNome = document.getElementById('erro-nome');

    if (nomeInput.value.length < 10) {
        erroNome.textContent = 'O nome deve ter mais de 10 caracteres';
        return false
    } else{
        erroNome.innerHTML = ''
        return true
    }
};

const veri_email = () => {
    const emailInput = document.getElementById('email')
    const erro_email = document.getElementById('erro-email')

    if(!emailInput.value.includes('@') || emailInput.value.length < 5){
        erro_email.textContent = 'Email incorreto';
        return false
    } else{
        erro_email.innerHTML = ''
        return true
    }
}

const veri_senha = () => {
    const senhaInput = document.getElementById('senha')
    const erro_senha = document.getElementById('erro-senha')
    const botaoMostrar = document.getElementById('btn');

    if(senhaInput.value.length < 8 ){
        erro_senha.textContent = 'Senha inválida'
        erro_senha.style.color = 'red';
        return false;
    } else{
        erro_senha.textContent = 'Senha válida'
        erro_senha.style.color = 'green';
        return true
    }
};

btn.addEventListener('click', function() {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        btn.textContent = 'Ocultar';
    } else {
        senhaInput.type = 'password';
        btn.textContent = 'Mostrar';
    }
});

const veri_tele = () => {
    const teleInput = document.getElementById('telefone');
    const erroTele = document.getElementById('erro-telefone');

    if (teleInput.value.length <= 9) {
        erroTele.textContent = 'O telefone deve ter no minimo 9 caracteres';
        return false;
    } else{
        erroTele.innerHTML = ''
        return true;
    }
};

const veri_end = () => {
    const endInput = document.getElementById('endereco');
    const erroEnd = document.getElementById('erro-endereco');

    if (endInput.value.length <= 5) {
        erroEnd.innerHTML = 'O endereço deve ter no minimo 5 caracteres';
        return false;
    } else{
        erroEnd.innerHTML = ''
        return true;
    }
};

const valor = () => {
    const selecionados = [...document.querySelectorAll('.item:checked')];

    const soma = selecionados.reduce((total, input) => total + Number(input.value), 0);

    const elementoTotal = document.getElementById('total');

    elementoTotal.innerHTML = `R$ ${soma.toFixed(2)}`;

    if (soma === 0) {
        elementoTotal.style.color = 'red';
    } else {
        elementoTotal.style.color = 'green';
    }
};

document.querySelectorAll('.item').forEach(checkbox => {
    checkbox.addEventListener('change', valor);
});

valor()

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
});