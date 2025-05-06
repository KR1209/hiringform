document.addEventListener("DOMContentLoaded", function() {
  // Handle form submission
  document.getElementById("hiringForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Select form elements and capture their values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;

    // Log form data to check if it's captured correctly
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Skills:", skills);

    // Send the captured data to the server or backend API
    fetch("/submit-hiring", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        skills: skills
      })
    })
    .then(response => response.json())  // Parse the response from the server
    .then(data => {
      console.log("Form submitted successfully:", data);
      // Handle success, like showing a success message or clearing the form
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      // Handle errors, like showing an error message
    });
  });
});
