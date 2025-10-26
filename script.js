const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
        const errorMsg = document.getElementById("error-msg");

        if (user === "Max" && pass === "Praktikum") {
            errorMsg.style.color = "green";
            errorMsg.textContent = "Login erfolgreich!, Max";

            setTimeout(() => {
                window.location.href = "Homepage.html";
            }, 1000);
        } else {
            errorMsg.style.color = "red";
            errorMsg.textContent = "Benutzername oder Passwort falsch.";
        }
    });
}


window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 750) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});