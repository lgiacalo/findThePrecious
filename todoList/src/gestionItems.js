
import * as ls from './localStorage.js'


const templateLi = document.querySelector(".d-none li");
const classNameButton = ["far", "fa-circle", "fas", "fa-check-circle"];
const listItems = document.getElementById("list-items");

const superToggle = (el, classes) => {
    classes.forEach(cl => el.classList.toggle(cl));
}


export function createNewItem(value, id, check) {
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

export function setEventButton(item){
    const value = item.querySelector("a").textContent.trim();

    item.querySelector(".button-check")
        .addEventListener("click", (e) => {
            superToggle(e.target, classNameButton);
            item.querySelector("span").classList.toggle("item-check");
            ls.toggleCheckLocalStorage(value);
    })
    item.querySelector(".button-delete")
        .addEventListener("click", function(e) {
            const li = this.parentElement;
            li.remove();
            ls.removeItemLocalStorage(value);
        })
}