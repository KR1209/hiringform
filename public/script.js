console.log("Script loaded");

const SUPABASE_URL = "https://nxbijhjtdgxykpdgdbxw.supabase.co";
const SUPABASE_API_KEY = "your-api-key-here";

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
