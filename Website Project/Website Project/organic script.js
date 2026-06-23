// Global Cart Counter Variable
let count = 0;

// Dynamic Add to Cart Function
function updateCart(productName) {
    // 1. Increments the total count
    count++;
    
    // 2. Updates the Red badge count in the header navigation display
    document.getElementById("cartCount").innerText = count;
    
    // 3. Shows the premium alert popup notification
    alert(productName + " has been added to your cart successfully! 🛒");
}

// Feedback Form Validation & Alert
function validateForm(event) {
    event.preventDefault(); // Form submit aagi page refresh aavatha thadukum

    // Input values edukirathu
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Simple Validation Check
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting! ⚠️");
        return false;
    }

    // Success Alert Message
    alert("Thank you, " + name + "! Your feedback has been submitted successfully. 💚");

    // Form-ah clear pannirum
    document.getElementById("feedbackForm").reset();
    return true;
}