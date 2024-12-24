// Function to display saved items in items.html
function displaySavedItems() {
    // Retrieve the saved items from localStorage
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const list = document.getElementById("saved-items-list");

    // Clear the list if there are no items
    list.innerHTML = '';

    if (savedItems.length === 0) {
        list.innerHTML = '<li>No items saved.</li>';
    } else {
        // Loop through the saved items and display each one
        savedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            list.appendChild(listItem);
        });
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', displaySavedItems);
