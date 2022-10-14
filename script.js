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

const sub = document.querySelector('#submit-btn');
sub.disabled = true;
const check = document.querySelector('#agreement');
check.addEventListener('click', () => {
  if (document.getElementById('submit-btn').disabled === true) {
    sub.disabled = false;
  } else {
    sub.disabled = true;
  }
});

buttonSend();
