

const buttonChecks = document.querySelectorAll(".button-check")

for (let btnCheck of buttonChecks){
    btnCheck.addEventListener('click', (e) => {
        e.target.classList.toggle("far");
        e.target.classList.toggle("fa-circle");
        e.target.classList.toggle("fas");
        e.target.classList.toggle("fa-check-circle");
    })
}


page('/', index);
page('/about', about);
page('/items', contact);
page('/contact/:contactName', contact);
page();

function index(e) {
  document.querySelector('p')
    .textContent = 'viewing index';
  console.log('e :>> ', e);
}

function about(e) {
  console.log('e :>> ', e);

  document.querySelector('p')
    .textContent = 'viewing about';
}

function contact(ctx) {
  console.log('ctx :>> ', ctx);

  document.querySelector('p')
    .textContent = 'viewing contact ' + (ctx.params.contactName || '');
}


