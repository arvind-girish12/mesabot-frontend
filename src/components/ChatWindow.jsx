import { useState, useEffect } from "react";
import "../styles/chatwindow.scss";
import { sendMessage } from "../api/chatApi";

const LoadingDots = () => {
  return (
    <div className="loading-dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultPrompts = [
    "Where to submit product metrics assignment?",
    "Where is problem solving statement?", 
    "How to access economics decks?"
  ];

  useEffect(() => {
    // Add default bot message when component mounts
    setMessages([{ text: "How can I help you today?", sender: "bot" }]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await sendMessage(input);
      const botMessage = { text: response.response, sender: "bot" };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = { 
        text: "Oops, there was an error! Reach out to the administrator", 
        sender: "bot",
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim()) {
      handleSend();
    }
  };

  const handlePromptClick = (prompt) => {
    setInput(prompt);
  };

  return (
    <div className="chat-window">
      <h2>Your AI Learning Assistant – Ask, Learn, and Stay on Track!</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender} ${msg.isError ? 'error' : ''}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <LoadingDots />
          </div>
        )}
      </div>
      <div className="input-area">
        <div className="quick-actions">
          {defaultPrompts.map((prompt, index) => (
            <button 
              key={index}
              className="action-button"
              onClick={() => handlePromptClick(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button className="send-button" onClick={handleSend} disabled={isLoading}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
