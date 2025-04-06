document.getElementById("contactForm").addEventListener("submit", function (e) {
  const form = e.target;
  const formData = new FormData(form);
  const message = formData.get("message").trim();

  if (message.length < 50) {
    e.preventDefault();
    document.getElementById("messageError").style.display = "block";
  } else {
    document.getElementById("messageError").style.display = "none";

    // Show success animation and hide form temporarily
    e.preventDefault(); // Still prevent so we can show the gif first
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          form.style.display = "none";
          document.getElementById("successMessage").style.display = "block";

          setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
            form.style.display = "block";
            form.reset();
          }, 3150);
        } else {
          alert("Failed to send form. Please try again later.");
        }
      })
      .catch((error) => {
        alert("Error occurred: " + error.message);
      });
  }
});
