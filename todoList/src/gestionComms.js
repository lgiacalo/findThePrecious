import * as ls from './localStorage.js'
import {superToggle} from './utils.js'

const templateLiComm = document.querySelector("#template-li-comm li");
// const classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];
const listComm = document.getElementById("list-comm");


export function initTodoListComms(id){
    const comms = ls.getCommsItemLocalStorage(id) ?? [];
    
    comms.forEach(comm => {
        const li = createNewComm(comm.value, comm.id_comm);
        setEventButtonComm(li);
    });
}

export function createNewComm(value, id_com) {
    const clonelicomm = templateLiComm.cloneNode(true);

    clonelicomm.querySelector("p").textContent = value;
    // if (check) {
    //     superToggle(clonelicomm.querySelector("i"), classNameButton);
    //     cloneli.querySelector("span").classList.toggle("item-check");
    // }
    listComm.insertAdjacentElement('afterbegin', clonelicomm);
    // clonelicomm.querySelector("a").href += id;
    return clonelicomm;
}

export function setEventButtonComm(comm) {
    // const value = comm.querySelector("a").textContent.trim();

    comm.querySelector(".button-delete")
        .addEventListener("click", function(e) {
            const li = this.parentElement;
            li.remove();
            // ls.removeItemLocalStorage(value);
        })
}