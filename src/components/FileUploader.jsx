import { useState } from "react";
import "../styles/fileuploader.scss";
import { uploadContent, clearDatabase } from "../api/uploadApi";

const FileUploader = () => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    try {
      await uploadContent({ subject, text, file });
    } catch (error) {
      console.error("Error uploading content:", error);
    }
  };

  const handleClear = async () => {
    try {
      await clearDatabase();
    } catch (error) {
      console.error("Error clearing database:", error);
    }
  };

  return (
    <div className="file-uploader">
      <h3>Upload Content</h3>
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea placeholder="Enter your text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Submit</button>
      <button onClick={handleClear} className='clear-button'>Clear Database</button>
    </div>
  );
};

export default FileUploader;
