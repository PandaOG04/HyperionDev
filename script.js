// Function to save an item to localStorage
function saveForLater(itemId, itemName) {
    // Get the current saved items or create an empty array if none exist
    let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Check if the item is already saved to avoid duplicates
    const itemExists = savedItems.some(item => item.id === itemId);

    if (!itemExists) {
        // Add the new item to the saved items array
        savedItems.push({ id: itemId, name: itemName });
        // Save the updated list back to localStorage
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
        alert(`${itemName} saved for later!`);
    } else {
        alert(`${itemName} is already saved!`);
    }
}
function addComment() {
    let comment = document.getElementById("comment").value;
    if(comment === "Tell us what you think!") {
        alert("Please write your comment")
    } else {
        alert("Thank you for your feedback! Comment added: " + comment);
    }
}
let likes = 0;
function likeItem(itemId) {
    likes++;
    alert(`Item ${itemId} has ${likes} likes.`);
}
