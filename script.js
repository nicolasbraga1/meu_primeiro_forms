const button = document.getElementById('button1');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
function buttonSend() {
  button.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

buttonSend();
