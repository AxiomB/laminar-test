const form = document.querySelector("#contact-form");

async function sendLogin() {
    Swal.fire({
        title: "Thank you for your contact",
        text: "We will reach out soon",
        icon: "success",
        heightAuto: false
    });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendLogin();
});