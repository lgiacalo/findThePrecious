
 const superToggle = (el, classes) => {
    classes.forEach(cl => el.classList.toggle(cl));
}



 function getItemLocalStorage(id){
    const items = getItemsLocalStorage();
    return items.find(it => it.id == id);
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



const templateLi = document.querySelector(".d-none li");
const classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];
const listItems = document.getElementById("list-items");

 function initTodoListItems(){
    const items = getItemsLocalStorage() ?? [];
    
    items.forEach(it => {
        const li = createNewItem(it.title, it.id, it.check);
        setEventButton(li);
    });
}

 function createNewItem(value, id, check) {
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

// submit form - add new todo
const formTodo = document.querySelector(".js-form");

 function gestionInputComm(id){
    formTodo.onsubmit =  (e) => {
        const inputComm = document.querySelector(".js-todo-input")

        e.preventDefault();
        if (inputComm.value.trim()) {
           console.log('input :>> ', inputComm.value);

        }
        inputComm.value = "";
    }
}


 function gestionInputTodo(){
        formTodo.onsubmit =  (e) => {
        const inputTodo = document.querySelector(".js-todo-input")

        e.preventDefault();
        if (inputTodo.value.trim()) {
            const id = recordItemLocalStorage(inputTodo.value.trim())
            if (id){
                let newItem = createNewItem(inputTodo.value.trim(), id, false);
                setEventButton(newItem);
            }
        }
        inputTodo.value = "";
    }
}

// gestion page.js

// page('/', index);
// page('/item/:id', item);
// page();

initTodoListItems();

// function index(e) {
    // e.preventDefault();
    toggleDisplayTodoItem("todo");
    const desc = document.querySelector(".description");
    desc.textContent = "What do you want to get done today?";
    gestionInputTodo();
// }

function item(e) {
    e.preventDefault();

    console.log('e :>> ', e);
    const id = e.params.id || 0;
    
    toggleDisplayTodoItem("item");
    const desc = document.querySelector(".description");
    desc.textContent = "What comment would you like to add?";
    const item = getItemLocalStorage(id);
    if (!item) {
        console.log("pas d'item");
        page.redirect('/');
        return;
    }
    
    const h2 = document.querySelector(".title-todo");
    console.log('h2 :>> ', h2);
    h2.textContent = item.title;
    gestionInputComm(id);
    
}



function toggleDisplayTodoItem(cible){
    const listTodo = document.querySelector("#list-items");
    const showItem = document.getElementById("show-item");
    const imgShow = document.querySelector(".img");
    
    console.log('imgShow :>> ', imgShow);

    if (cible === "todo"){
        listTodo.classList.remove("d-none");
        showItem.classList.add("d-none");
        imgShow.classList.remove("d-none");
    }
    else{
        listTodo.classList.add("d-none");
        showItem.classList.remove("d-none");
        imgShow.classList.add("d-none");
    }
}
