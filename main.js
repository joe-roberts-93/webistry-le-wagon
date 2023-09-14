// You can remove this line when you're ready.
console.log('Good luck!');
const form = document.querySelector(".form");
const formContainer = document.querySelector(".form-container");


const params = new URLSearchParams(document.location.search)
const userName = params.get("name")

form.addEventListener("submit", () => {
    formContainer.innerHTML = `<div class='success-text'><h2><span class='green'>Thank you ${userName}!</span></h2><h2 class='success-text'>You're all set.<h2></div>`
})