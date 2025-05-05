document.getElementById("hiringForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const skills = document.getElementById("skills").value.trim();
  
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, skills }),
    });
  
    const message = document.getElementById("responseMessage");
    if (response.ok) {
      message.textContent = "Form submitted successfully!";
      document.getElementById("hiringForm").reset();
    } else {
      message.textContent = "There was an error submitting the form.";
      message.style.color = "red";
    }
  });
  