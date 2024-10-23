// Function to handle adding new items to the list
document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('item-input');
    const itemText = input.value.trim();

    if (itemText !== '') {
        addItemToList(itemText);
        input.value = ''; // Clear the input field
    }
});

// Function to add item to the list
function addItemToList(itemText) {
    const shoppingList = document.getElementById('shopping-list');

    const listItem = document.createElement('li');

    // Create checkbox for marking the item as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        listItem.classList.toggle('completed');
    });

    // Create label for item text
    const label = document.createElement('label');
    label.textContent = itemText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        shoppingList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    shoppingList.appendChild(listItem);
}
