
import {recordItemLocalStorage} from './src/localStorage.js'
import {initTodoListItems, createNewItem, setEventButton} from './src/gestionItems.js'

initTodoListItems();

// submit form - add new todo
const formTodo = document.querySelector(".js-form");
formTodo.addEventListener("submit", (e) => {
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
})






// gestion page.js

page('/', index);
page('/item/:id', item);
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
  const id = e.params.id || 0;
//   page.redirect("/item/1", "/item/14");
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

