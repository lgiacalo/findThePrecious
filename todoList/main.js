
import {getItemLocalStorage} from './src/localStorage.js'
import {initTodoListItems} from './src/gestionItems.js'
import {gestionInputTodo, gestionInputComm} from './src/event.js'


// test gestion page.js

page.configure({ hashbang: true });

page.base('/findThePrecious/todoList/')
page('/', index);
page('/item/:id', item);
page();


initTodoListItems();
index();

// todo: decommenter la fonction
function index() {
    // e.preventDefault();
    toggleDisplayTodoItem("todo");
    const desc = document.querySelector(".description");
    desc.textContent = "What do you want to get done today?";
    gestionInputTodo();
}

function item(e) {
    // e.preventDefault();

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
