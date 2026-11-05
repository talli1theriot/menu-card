let form = document.querySelector("#menu-form");
let form = document.querySelector("#menu-input")
let form = document.querySelector("#count")
let form = document.querySelector("#menu-text")

function handleSubmit(event) {
    event.preventDefault();
    let menu = JSON.parse(input.value);
    count.textContent = "We have " + menu.length + " items today."
}

form.addEventListener("submit", handleSubmit);