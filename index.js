let items = [];

const itemsDiv = document.getElementById("items")

function renderItem() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p")
        text.textContent = items;

        const button = document.createElement("button")
        button.textContent = "Delete"

        itemsDiv.appendChhild(text)
    }
}

function loadItems() {}

function saveItems() {}

function addItem() {}

function removeItem() {}