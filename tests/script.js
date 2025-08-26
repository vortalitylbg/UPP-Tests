document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Merci pour votre message ! Nous reviendrons vers vous rapidement.");
  this.reset();
});
