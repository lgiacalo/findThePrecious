

export function getItemLocalStorage(id){
    const items = getItemsLocalStorage();
    return items.find(it => it.id == id);
}

export function getItemsLocalStorage(){
    return JSON.parse(localStorage.getItem("items"))
}

export function removeItemLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));

    let newItems = items.filter(i => i.title !== value);
    localStorage.setItem("items", JSON.stringify(newItems));
}

export function recordItemLocalStorage(value) {
    const items = JSON.parse(localStorage.getItem("items")) ?? [];
    const id = (items.length) ? items[items.length - 1].id + 1 : 1; 

    if (items.some(i => i.title === value)) return false
    items.push({id: id, title: value, check: false, comm: {}})

    localStorage.setItem("items", JSON.stringify(items));
    return id;
}

export function toggleCheckLocalStorage(value){
    let items = JSON.parse(localStorage.getItem("items"));
    let it = items.find(it => it.title === value);

    it.check = !(it.check);
    localStorage.setItem("items", JSON.stringify(items));
}

