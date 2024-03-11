let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")

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

function loadItems() {}

function saveItems() {}

function addItem() {
const value = input.value
if (!value) {
    alert("You cannot add an emply item")
    return
}
items.push(value)
renderItem()
input.value = ""
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItem()
}