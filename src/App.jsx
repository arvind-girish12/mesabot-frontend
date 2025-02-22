import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import AdminPage from "./pages/AdminPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div style={{display: "flex"}}>
        <Sidebar />
        <div style={{marginLeft: "250px", flex: 1, padding: "20px"}}>
          <Routes>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
