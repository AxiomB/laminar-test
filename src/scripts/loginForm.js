const form = document.querySelector("#login-form");

async function sendLogin() {
    window.location.replace(window.location.origin + "/private.html");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendLogin();
});