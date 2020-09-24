
const superToggle = (el, classes) => {
    classes.forEach(cl => el.classList.toggle(cl));
}



function removeItemsLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));

    let newItems = items.filter(i => i.title !== value);
    localStorage.setItem("items", JSON.stringify(newItems));
}

function recordLocalStorage(value) {
    let items = JSON.parse(localStorage.getItem("items"));

    if (items === null) items = [{title: value, comm: {}}];
    else if (items.every(i => i.title !== value)) {
        items.push({title: value, comm: {}})
    } else return false

    localStorage.setItem("items", JSON.stringify(items));
    return true;
}




// event to add new todo
const formTodo = document.querySelector(".js-form");
formTodo.addEventListener("submit", (e) => {
    const inputTodo = document.querySelector(".js-todo-input")
    e.preventDefault();
    if (inputTodo.value) {
        if (recordLocalStorage(inputTodo.value.trim())){
            addItem(inputTodo.value.trim());
        }
    }
    inputTodo.value = "";
})

const listItems = document.getElementById("list-items");
const templateLi = document.querySelector(".d-none li");

function createNewItem(listItems, value) {
    const cloneli = templateLi.cloneNode(true);
    cloneli.querySelector("a").textContent = value;
    listItems.insertAdjacentElement('afterbegin', cloneli);
    return cloneli;
}

function addItem(value){
    const newItem = createNewItem(listItems, value);
    console.log('newItem :>> ', newItem);
    newItem.querySelector(".button-check")
        .addEventListener("click", (e) => {
            superToggle(e.target, ["far", "fa-circle", "fas", "fa-check-circle"]);
            newItem.querySelector("span").classList.toggle("item-check");
    })
    newItem.querySelector(".button-delete")
        .addEventListener("click", function(e) {
            const li = this.parentElement;
            li.remove();
            const span = li.querySelector("span");
            console.log('span.textContent :>> ', span.textContent);
            removeItemsLocalStorage(span.textContent)
    })
    
}











// gestion page.js

page('/', index);
page('/about', about);
page('/items', contact);
page('/contact/:contactName', contact);
page();

function index(e) {
//   document.querySelector('p')
//     .textContent = 'viewing index';
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


