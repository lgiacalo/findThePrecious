
const superToggle = (el, classes) => {
    classes.forEach(cl => el.classList.toggle(cl));
}



function removeItemLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));

    let newItems = items.filter(i => i.title !== value);
    localStorage.setItem("items", JSON.stringify(newItems));
}

function recordItemLocalStorage(value) {
    let items = JSON.parse(localStorage.getItem("items")) ?? [];

    if (items.some(i => i.title === value)) return false
    items.push({title: value, check: false, comm: {}})

    localStorage.setItem("items", JSON.stringify(items));
    return true;
}

function toggleCheckLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));
    let it = items.find(it => it.title === value);
    it.check = !(it.check);
    localStorage.setItem("items", JSON.stringify(items));
}




const listItems = document.getElementById("list-items");
const templateLi = document.querySelector(".d-none li");

// event to add new todo
const formTodo = document.querySelector(".js-form");
formTodo.addEventListener("submit", (e) => {
    const inputTodo = document.querySelector(".js-todo-input")
    e.preventDefault();
    if (inputTodo.value) {
        if (recordItemLocalStorage(inputTodo.value.trim())){
            let newItem = createNewItem(listItems, inputTodo.value.trim(), false);
            setEventButton(newItem);
        }
    }
    inputTodo.value = "";
})


function createNewItem(listItems, value, check) {
    const cloneli = templateLi.cloneNode(true);
    cloneli.querySelector("a").textContent = value;
    listItems.insertAdjacentElement('afterbegin', cloneli);
    return cloneli;
}

function setEventButton(item){
    const value = item.querySelector("a").textContent.trim();
    item.querySelector(".button-check")
        .addEventListener("click", (e) => {
            superToggle(e.target, ["far", "fa-circle", "fas", "fa-check-circle"]);
            item.querySelector("span").classList.toggle("item-check");
            toggleCheckLocalStorage(value);
    })
    item.querySelector(".button-delete")
        .addEventListener("click", function(e) {
            const li = this.parentElement;
            li.remove();
            removeItemLocalStorage(value);
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


