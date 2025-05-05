export async function onRequestPost(context) {
    const body = await context.request.json();
    const { name, email, phone, skills } = body;
  
    const supabaseUrl = "https://nxbijhjtdgxykpdgdbxw.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54YmlqaGp0ZGd4eWtwZGdkYnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTk1MjAsImV4cCI6MjA2MjAzNTUyMH0.SRd4AJnZVjcxwiz2UDb6r_dRbmTE1EAMWncjLJREwlMS";
  
    const result = await fetch(supabaseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ name, email, phone, skills }),
    });
  
    if (result.ok) {
      return new Response(JSON.stringify({ message: "Inserted successfully" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Insert failed" }), { status: 500 });
    }
  }
  