export const sendMessage = async (message, memory) => {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, memory }),
    });
    return response.json();
  };
  