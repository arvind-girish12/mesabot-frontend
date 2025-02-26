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

export const clearDatabase = async () => {
    await fetch("http://localhost:5000/admin/clear", {
      method: "DELETE"
    });
  };


export const handleWhatsappUpload = async (whatsappFile) => {
    if (!whatsappFile) return;

    const formData = new FormData();
    formData.append("file", whatsappFile);

    try {
      await fetch("http://localhost:5000/admin/whatsapp", {
        method: "POST",
        body: formData
      });
    } catch (error) {
      console.error("Error uploading WhatsApp chat:", error);
    }
  };