import {recordItemLocalStorage, recordCommLocalStorage} from './localStorage.js'
import {createNewItem, setEventButton} from './gestionItems.js'
import {createNewComm, setEventButtonComm} from './gestionComms.js'


// submit form - add new todo
const formTodo = document.querySelector(".js-form");

export function gestionInputComm(id){
    formTodo.onsubmit =  (e) => {
        const inputComm = document.querySelector(".js-todo-input")

        e.preventDefault();
        if (inputComm.value.trim()) {
            console.log('input :>> ', inputComm.value);
            const id_comm = recordCommLocalStorage(id, inputComm.value.trim());
            console.log('id_comm :>> ', id_comm);

            if (id_comm) {
                let newComm = createNewComm(inputComm.value.trim(), id_comm);
                setEventButtonComm(newComm);
            }
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

