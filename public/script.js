const SUPABASE_URL = "https://nxbijhjtdgxykpdgdbxw.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."; // keep the rest unchanged

document.getElementById("hiringForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const Name = document.getElementById("Name").value.trim();
  const Email = document.getElementById("Email").value.trim();
  const Phone = document.getElementById("Phone").value.trim();
  const Skills = document.getElementById("Skills").value.trim();

  const message = document.getElementById("responseMessage");

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/hiring`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_API_KEY,
        "Authorization": `Bearer ${SUPABASE_API_KEY}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify({ Name, Email, Phone, Skills }),
    });

    const result = await response.json();

    if (response.ok) {
      message.textContent = "Form submitted successfully!";
      message.style.color = "green";
      document.getElementById("hiringForm").reset();
    } else {
      message.textContent = `Error submitting form: ${result.message || JSON.stringify(result)}`;
      message.style.color = "red";
    }
  } catch (error) {
    message.textContent = `Error: ${error.message}`;
    message.style.color = "red";
  }
});
