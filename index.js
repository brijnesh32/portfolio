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

  // Submit form data using fetch (AJAX)
  fetch("https://formsubmit.co/brijnesh@gmail.com", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // Hide the form
        form.style.display = "none";

        // Show the success image
        document.getElementById("successMessage").style.display = "block";

        // Reset form after 5 seconds
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "none";
          form.style.display = "block";
          form.reset();
        }, 5000);
      } else {
        alert("Failed to send form. Please try again later.");
      }
    })
    .catch((error) => {
      alert("Error occurred: " + error.message);
    });
});
