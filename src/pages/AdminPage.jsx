import { useState } from "react";
import "../styles/adminPage.scss";
import FileUploader from "../components/FileUploader";
import { handleWhatsappUpload } from "../api/uploadApi";

const AdminPage = () => {
  const [showWhatsappUploader, setShowWhatsappUploader] = useState(true);
  const [whatsappFile, setWhatsappFile] = useState(null);

  const handleUpload = () => {
    handleWhatsappUpload(whatsappFile);
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>
      <FileUploader />
      
      {showWhatsappUploader && (
        <div className="whatsapp-uploader">
          <h3>Upload WhatsApp Chat</h3>
          <input 
            type="file"
            onChange={(e) => setWhatsappFile(e.target.files[0])}
          />
          <button onClick={handleUpload}>
            Upload WhatsApp Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
