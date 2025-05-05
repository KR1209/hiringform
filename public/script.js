const SUPABASE_URL = "https://nxbijhjtdgxykpdgdbxw.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54YmlqaGp0ZGd4eWtwZGdkYnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTk1MjAsImV4cCI6MjA2MjAzNTUyMH0.SRd4AJnZVjcxwiz2UDb6r_dRbmTE1EAMWncjLJREwlM";

document.getElementById("hiringForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const skills = document.getElementById("skills").value.trim();

  // Perform POST request to Supabase
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/hiring_form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_API_KEY,
      },
      body: JSON.stringify({ name, email, phone, skills }),
    });

    const message = document.getElementById("responseMessage");

    if (response.ok) {
      // If the form submission is successful
      message.textContent = "Form submitted successfully!";
      message.style.color = "green";
      document.getElementById("hiringForm").reset();
    } else {
      // If there is an error with the submission
      const errorData = await response.json();
      message.textContent = `Error submitting form: ${errorData.message || "Unknown error"}`;
      message.style.color = "red";
    }
  } catch (error) {
    // Catch any other errors like network issues
    const message = document.getElementById("responseMessage");
    message.textContent = `Error: ${error.message}`;
    message.style.color = "red";
  }
});
