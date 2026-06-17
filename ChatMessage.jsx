export default function ChatMessage({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] md:max-w-[65%] rounded-2xl px-5 py-4 shadow-lg break-words whitespace-pre-wrap ${isUser ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-100"} `}
      >
        {text}
      </div>
    </div>
  );
}
