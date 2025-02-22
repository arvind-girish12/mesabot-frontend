export const uploadContent = async ({ subject, text, file }) => {
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("text", text);
    if (file) formData.append("file", file);
  
    await fetch("http://localhost:5000/admin", {
      method: "POST",
      body: formData,
    });
  };
  