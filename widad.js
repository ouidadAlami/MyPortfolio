document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmation = document.getElementById("confirmation");

  if (name && email && message) {
    confirmation.textContent = `Merci pour votre message, ${name} !`;
    confirmation.style.color = "green";
    this.reset();
  } else {
    confirmation.textContent = "Veuillez remplir tous les champs.";
    confirmation.style.color = "red";
  }
});
