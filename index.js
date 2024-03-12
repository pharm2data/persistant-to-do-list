let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItem() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marinRight = "10px"
        text.textContent = items;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items  = JSON.parse(oldItems)
    renderItem()
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
const value = input.value
if (!value) {
    alert("You cannot add an emply item")
    return
}
items.push(value)
renderItem()
input.value = ""
saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItem()
    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)