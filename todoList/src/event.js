import {recordItemLocalStorage} from './localStorage.js'
import {createNewItem, setEventButton} from './gestionItems.js'


// submit form - add new todo
const formTodo = document.querySelector(".js-form");

export function gestionInputComm(id){
    formTodo.onsubmit =  (e) => {
        const inputComm = document.querySelector(".js-todo-input")

        e.preventDefault();
        if (inputComm.value.trim()) {
           console.log('input :>> ', inputComm.value);

        }
        inputComm.value = "";
    }
}


export function gestionInputTodo(){
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

