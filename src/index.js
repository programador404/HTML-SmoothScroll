const btnButton = document.querySelector('.btn-login');
const formLogin = document.querySelector('form');

btnButton.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = [...document.querySelectorAll('.input-block input')];

  fields.forEach(field => {
    if (field.value === "") {
      formLogin.classList.add('validate-error');
    }
  })

  const formError = document.querySelector('.validate-error');
  if (formError) {
    formError.addEventListener('animationend', (event) => {
      if (event.animationName === 'nono') {
        formError.classList.remove('validate-error');
      }
    })
  } else {
    formLogin.classList.add('form-hide');
  }
});

const ulSquares = document.querySelector('ul.squares');

for (let iterator = 0; iterator < 11; iterator++) {
  const li = document.createElement('li');

  const size = Math.floor(Math.random() * (150 - 10) + 10);
  const position = Math.random() * (99 - 1) + 1;
  const delay = Math.random() * (0.1 - 10) + 0.1;
  const duration = Math.random() * (20 - 24) + 20;


  li.style.height = `${size}px`;
  li.style.width = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  ulSquares.appendChild(li);
}