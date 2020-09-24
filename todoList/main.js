import {getItemLocalStorage} from './src/localStorage.js'
import {initTodoListItems} from './src/gestionItems.js'
import {gestionInputTodo} from './src/event.js'


// gestion page.js

page('/', index);
page('/item/:id', item);
page();

initTodoListItems();

function index(e) {
    
    toggleDisplayTodoItem("todo");
    gestionInputTodo();
}

function item(e) {
    console.log('e :>> ', e);
    const id = e.params.id || 0;
    
    toggleDisplayTodoItem("item");
    const item = getItemLocalStorage(id);
    
    const h2 = document.querySelector(".title-todo");
    console.log('h2 :>> ', h2);
    h2.textContent = item.title;
    
}





function toggleDisplayTodoItem(cible){
    const listTodo = document.querySelector("#list-items");
    const showItem = document.getElementById("show-item");

    if (cible === "todo"){
        listTodo.classList.remove("d-none");
        showItem.classList.add("d-none");
    }
    else{
        listTodo.classList.add("d-none");
        showItem.classList.remove("d-none");
    }
}