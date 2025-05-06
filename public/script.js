console.log("Script loaded");

const SUPABASE_URL = "https://nxbijhjtdgxykpdgdbxw.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54YmlqaGp0ZGd4eWtwZGdkYnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTk1MjAsImV4cCI6MjA2MjAzNTUyMH0.SRd4AJnZVjcxwiz2UDb6r_dRbmTE1EAMWncjLJREwlM";

document.getElementById("hiringForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("Form submitted");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const message = document.getElementById("responseMessage");

  console.log("Collected values:", { name, email, phone, skills });

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/hiring_form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_API_KEY,
        "Authorization": `Bearer ${SUPABASE_API_KEY}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify({ name, email, phone, skills }),
    });

    const result = await response.json();

    if (response.ok) {
      message.textContent = "Form submitted successfully!";
      message.style.color = "green";
      document.getElementById("hiringForm").reset();
    } else {
      console.error("Submission failed", result);
      message.textContent = `Error submitting form: ${result.message || JSON.stringify(result)}`;
      message.style.color = "red";
    }
  } catch (error) {
    console.error("Error in try-catch:", error);
    message.textContent = `Error: ${error.message}`;
    message.style.color = "red";
  }
});
