import { useState, useRef, useEffect } from "react";

import ChatHeader from "../components/ChatHeader";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import SuggestedPrompts from "../components/SuggestedPrompts";
import TypingIndicator from "../components/TypingIndicator";
import { getAIResponse } from "../services/ChatService";
import ChatSidebar from "../components/ChatSidebar";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [isTyping, setIsTyping] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const [chatHistory] = useState([
    {
      id: 1,
      title: "Become Solution Architect",
    },
    {
      id: 2,
      title: "AWS Certification Roadmap",
    },
    {
      id: 3,
      title: "Java Developer Career Growth",
    },
  ]);

  const handleNewChat = () => {
    setMessages([]);
    setInput("");
  };

  const handleSend = async () => {
    const cleanedInput = input
      .split("\n")
      .map((line) => line.trim())
      .join("\n")
      .trim();

    if (!cleanedInput) return;

    const userMessage = {
      sender: "user",
      text: cleanedInput,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentPrompt = cleanedInput;

    setInput("");

    setIsTyping(true);

    try {
      const aiResponse = await getAIResponse(currentPrompt);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiResponse,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-screen flex bg-slate-950 text-white">
      <div className="hidden md:flex w-72 border-r border-slate-800">
        <ChatSidebar chatHistory={chatHistory} onNewChat={handleNewChat} />
      </div>

      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-50 md:hidden">
            <ChatSidebar
              chatHistory={chatHistory}
              onNewChat={() => {
                handleNewChat();
                setSidebarOpen(false);
              }}
            />
          </div>
        </>
      )}

      <div className="flex-1 flex flex-col">
        <ChatHeader
          isAuthenticated={isAuthenticated}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {messages.length === 0 ? (
              <div className="mt-24 text-center">
                <h1 className="text-4xl font-bold mb-4">Career Advisor AI</h1>

                <p className="text-slate-400">
                  Ask me anything about careers, roadmaps, certifications,
                  interviews, or salary growth.
                </p>

                <SuggestedPrompts onPromptClick={setInput} />
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    sender={message.sender}
                    text={message.text}
                  />
                ))}

                {isTyping && <TypingIndicator />}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        <ChatInput input={input} setInput={setInput} onSend={handleSend} />
      </div>
    </div>
  );
}
