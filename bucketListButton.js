const image = document.getElementById("body")
image.classList.add("image")


// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Get the state of checkboxes from localStorage
    for (let i = 1; i <= 16; i++) {
        let checkbox = document.getElementById(`checkbox${i}`);
        // If a checkbox was checked previously, mark it as checked
        if (localStorage.getItem(`checkbox${i}`) === "true") {
            checkbox.checked = true;
        }
        // Add event listener to store checkbox state on change
        checkbox.addEventListener("change", function() {
            localStorage.setItem(`checkbox${i}`, checkbox.checked);
        });
    }
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}

const srdceZpet = document.getElementById('clickOnMeSrdce');

srdceZpet.addEventListener('click', function() {
    window.location.href = './index.html';
});