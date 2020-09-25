import * as ls from './localStorage.js'

const templateLiComm = document.querySelector("#template-li-comm li");
const listComm = document.getElementById("list-comm");

export function initTodoListComms(id){
    const comms = ls.getCommsItemLocalStorage(id) ?? [];
    
    comms.forEach(comm => {
        const li = createNewComm(comm.value, comm.id_comm);
        setEventButtonComm(li);
    });
}

export function removeListComms(){
    let ps = document.querySelectorAll('p');

    ps.forEach(p => {
        if (p.id[0] === 'c'){
            p.parentElement.remove();
        }
    })
}

export function createNewComm(value, id_comm) {
    const clonelicomm = templateLiComm.cloneNode(true);

    clonelicomm.querySelector("p").textContent = value;
    clonelicomm.querySelector("p").id = id_comm;
    listComm.append(clonelicomm);
    return clonelicomm;
}

export function setEventButtonComm(comm) {

    comm.querySelector(".button-delete")
        .addEventListener("click", function(e) {
            const li = this.parentElement;
            li.remove();
            const id = listComm.parentElement.querySelector("h2").id;
            ls.removeCommItemLocalStorage(id, li.querySelector("p").id);
        })
}