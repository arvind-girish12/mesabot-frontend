import "../styles/adminPage.scss";
import FileUploader from "../components/FileUploader";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>
      <FileUploader />
    </div>
  );
};

export default AdminPage;
