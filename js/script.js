const contactForm = document.getElementById("Contact-Form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      //url Teriam Kasih
      window.location.href = "thankyou.html";
    })
    .catch((e) => alert("Error"));
});
