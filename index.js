document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const message = formData.get("message").trim();

  if (message.length < 50) {
    document.getElementById("messageError").style.display = "block";
    return;
  } else {
    document.getElementById("messageError").style.display = "none";
  }

  // Submit form data using fetch
  fetch("https://formsubmit.co/brijnesh31@gmail.com", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.style.display = "none";
        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "none";
          form.style.display = "block";
          form.reset();
        }, 3400);
      } else {
        alert("Failed to send form. Please try again later.");
      }
    })
    .catch((error) => {
      alert("Error occurred: " + error.message);
    });
});
