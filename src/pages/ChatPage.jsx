import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import DeadlineSlider from "../components/DeadlineSlider";
import "../styles/chatPage.scss";

const ChatPage = () => {
  return (
    <div className="chat-page">
      <ChatWindow />
      <DeadlineSlider />
    </div>
  );
};

export default ChatPage;
