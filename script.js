document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || email === "" || message === "") {
        response.textContent = "All fields are required!";
        response.style.color = "red";
    } else {
        response.textContent = "Thank you, " + name + "! Your message has been sent.";
        response.style.color = "green";
    }
});

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let mode = document.body.classList.contains("dark-mode") ? "Dark Mode" : "Light Mode";
    this.textContent = mode;
});
