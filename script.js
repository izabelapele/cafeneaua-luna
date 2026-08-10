const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Rezervarea ta a fost trimisă! ☕ Te așteptăm la Cafeneaua Luna!");
});