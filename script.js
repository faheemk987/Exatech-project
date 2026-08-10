document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("navLinks");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var form = document.getElementById("contactForm");
  var msg = document.getElementById("formMsg");

  if (form && msg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name").value;
      msg.textContent = "Thanks " + name + "! Your message has been received.";
      form.reset();
    });
  }
});
