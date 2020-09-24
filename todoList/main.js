
const superToggle = (el, classes) => {
    classes.forEach(cl => el.classList.toggle(cl));
}


function getItemsLocalStorage(){
    return JSON.parse(localStorage.getItem("items"))
}

function removeItemLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));

    let newItems = items.filter(i => i.title !== value);
    localStorage.setItem("items", JSON.stringify(newItems));
}

function recordItemLocalStorage(value) {
    const items = JSON.parse(localStorage.getItem("items")) ?? [];
    const id = (items.length) ? items[items.length - 1].id + 1 : 1; 

    if (items.some(i => i.title === value)) return false
    items.push({id: id, title: value, check: false, comm: {}})

    localStorage.setItem("items", JSON.stringify(items));
    return id;
}

function toggleCheckLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));
    let it = items.find(it => it.title === value);

    it.check = !(it.check);
    localStorage.setItem("items", JSON.stringify(items));
}




const listItems = document.getElementById("list-items");
const templateLi = document.querySelector(".d-none li");
const classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];

// event to add new todo
const formTodo = document.querySelector(".js-form");
formTodo.addEventListener("submit", (e) => {
    const inputTodo = document.querySelector(".js-todo-input")

    e.preventDefault();
    if (inputTodo.value) {
        const id = recordItemLocalStorage(inputTodo.value.trim())
        if (id){
            let newItem = createNewItem(listItems, inputTodo.value.trim(), id, false);
            setEventButton(newItem);
        }
    }
    inputTodo.value = "";
})


function createNewItem(listItems, value, id, check) {
    const cloneli = templateLi.cloneNode(true);

    cloneli.querySelector("a").textContent = value;
    if (check) {
        superToggle(cloneli.querySelector("i"), classNameButton);
        cloneli.querySelector("span").classList.toggle("item-check");
    }
    listItems.insertAdjacentElement('afterbegin', cloneli);
    cloneli.querySelector("a").href += id;
    return cloneli;
}

function setEventButton(item){
    const value = item.querySelector("a").textContent.trim();

    item.querySelector(".button-check")
        .addEventListener("click", (e) => {
            superToggle(e.target, classNameButton);
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


function initTodoList(){
    const items = getItemsLocalStorage() ?? [];
    
    items.forEach(it => {
        const li = createNewItem(listItems, it.title, it.id, it.check);
        setEventButton(li);
    });
}


initTodoList();




// gestion page.js

page('/', index);
page('/item/:item', item);
page('/about', about);
page('/contact/:contactName', contact);
page();



function index(e) {
//   document.querySelector('p')
//     .textContent = 'viewing index';
//   console.log('e :>> ', e);
}

function item(e) {
  console.log('e :>> ', e);
  page.redirect("/item/1", "/item/14");
  document.querySelector('p')
    .textContent = 'viewing item ' + (e.params.item || '');
}



function about(e) {
//   console.log('e :>> ', e);

  document.querySelector('p')
    .textContent = 'viewing about';
}

function contact(ctx) {
    document.querySelector('p')
      .textContent = 'viewing contact ' + (ctx.params.contactName || '');
  }

