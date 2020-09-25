
// comm items todo
export function getCommsItemLocalStorage(id){
    const item = getItemLocalStorage(id);
    return item.comm;
}

export function getItemLocalStorage(id){
    const items = getItemsLocalStorage();
    return items.find(it => it.id == id);
}

export function removeCommItemLocalStorage(id, id_comm){
    let items = getItemsLocalStorage();

    items = items.map(item => {
        if (item.id == id) {
            item.comm = item.comm.filter(c => c.id_comm !== id_comm);
        }
        return item;
    })
    localStorage.setItem("items", JSON.stringify(items));
}

export function recordCommLocalStorage(id, value){
    const items = getItemsLocalStorage()
    const item = items.find(it => it.id == id);
    const id_comm = item.comm.length
        ? 'c' + (item.comm[item.comm.length - 1].id_comm[1] * 1 + 1) : "c1";

    item.comm.push({id_comm: id_comm, value: value})
    localStorage.setItem("items", JSON.stringify(items));
    return id_comm;
}

// Items todo
export function getItemsLocalStorage(){
    return JSON.parse(localStorage.getItem("items")) ?? [];
}

export function removeItemLocalStorage(value){
    let items = getItemsLocalStorage();

    let newItems = items.filter(i => i.title !== value);
    localStorage.setItem("items", JSON.stringify(newItems));
}

export function recordItemLocalStorage(value) {
    const items = getItemsLocalStorage();
    const id = (items.length) ? items[items.length - 1].id + 1 : 1; 

    if (items.some(i => i.title === value)) return false
    items.push({id: id, title: value, check: false, comm: []})

    localStorage.setItem("items", JSON.stringify(items));
    return id;
}

export function toggleCheckLocalStorage(value){
    let items = getItemsLocalStorage();
    let it = items.find(it => it.title === value);

    it.check = !(it.check);
    localStorage.setItem("items", JSON.stringify(items));
}

