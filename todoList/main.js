
// event to add new todo
const formTodo = document.querySelector(".js-form");
formTodo.addEventListener("submit", (e) => {
    const inputTodo = document.querySelector(".js-todo-input")
    e.preventDefault();
    if (inputTodo.value) {
        newItem(inputTodo.value);
    }
    inputTodo.value = "";
})

const listItems = document.getElementById("list-items");
const templateLi = document.querySelector(".d-none li");

function addNewItem(listItems, value) {
    const cloneli = templateLi.cloneNode(true);
    cloneli.querySelector("a").textContent = value;
    listItems.appendChild(cloneli);
    return cloneli;
}

function newItem(value){
    const newItem = addNewItem(listItems, value);
    console.log('newItem :>> ', newItem);
    newItem.querySelector(".button-check")
        .addEventListener("click", (e) => {
        e.target.classList.toggle("far");
        e.target.classList.toggle("fa-circle");
        e.target.classList.toggle("fas");
        e.target.classList.toggle("fa-check-circle");
        e.target.classList.toggle("item-check");
        newItem.querySelector("span").classList.toggle("item-check");
    })
    
}











// gestion page.js

page('/', index);
page('/about', about);
page('/items', contact);
page('/contact/:contactName', contact);
page();

function index(e) {
  document.querySelector('p')
    .textContent = 'viewing index';
//   console.log('e :>> ', e);
}

function about(e) {
//   console.log('e :>> ', e);

  document.querySelector('p')
    .textContent = 'viewing about';
}

function contact(ctx) {
//   console.log('ctx :>> ', ctx);

  document.querySelector('p')
    .textContent = 'viewing contact ' + (ctx.params.contactName || '');
}


