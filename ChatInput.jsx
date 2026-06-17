import { Send } from "lucide-react";
import { useRef, useEffect } from "react";

export default function ChatInput({ input, setInput, onSend }) {
  const MAX_TEXTAREA_HEIGHT = 180;
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";

    textarea.style.height = Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT) + "px";
  }, [input]);

  return (
    <div className="p-4 border-t border-slate-800 bg-slate-950">
      <div
        className="
          max-w-4xl
          mx-auto
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          flex
          items-center
          px-3
          py-2
          text-wrap
        "
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Prevent new line
              onSend(); // Send message
            }
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          placeholder="Ask about your career..."
          rows={1}
          className="flex-1 bg-transparent outline-none resize-none text-white px-3 py-2 max-h-[180px]"
        />

        <button
          onClick={onSend}
          className="
            bg-indigo-600
            hover:bg-indigo-700
            p-3
            rounded-xl
            transition-all
            cursor-pointer
          "
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
