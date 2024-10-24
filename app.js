// Get elements
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");
const itemList = document.getElementById("item-list");

let items = [];
let editIndex = null;

// Add new item
addBtn.addEventListener("click", function () {
    const item = itemInput.value.trim();
    if (item) {
        items.push(item);
        renderItems();
        itemInput.value = "";
    }
});

// Render items
function renderItems() {
    itemList.innerHTML = "";
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item}
            <div>
                <button class="edit-btn" onclick="editItem(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
        itemList.appendChild(li);
    });
}

// Edit an item
function editItem(index) {
    itemInput.value = items[index];
    editIndex = index;
    addBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
}

// Update the item
updateBtn.addEventListener("click", function () {
    const updatedItem = itemInput.value.trim();
    if (updatedItem && editIndex !== null) {
        items[editIndex] = updatedItem;
        renderItems();
        itemInput.value = "";
        addBtn.style.display = "inline-block";
        updateBtn.style.display = "none";
        editIndex = null;
    }
});

// Delete an item
function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}
