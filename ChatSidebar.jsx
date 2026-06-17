import { Plus } from "lucide-react";

export default function ChatSidebar({ chatHistory, onNewChat }) {
  return (
    <div
      className="
        w-full
        border-r
        border-slate-800
        bg-slate-950
        flex
        flex-col
      "
    >
      {/* New Chat */}

      <div className="p-4">
        <button
          onClick={onNewChat}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-indigo-600
            hover:bg-indigo-700
            rounded-xl
            py-3
            transition
            cursor-pointer
          "
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* History */}

      <div className="flex-1 overflow-y-auto px-3">
        <h3 className="text-xs text-slate-500 uppercase mb-3">Recent Chats</h3>

        {chatHistory.map((chat) => (
          <button
            key={chat.id}
            className="
              w-full
              text-left
              mb-2
              px-3
              py-3
              rounded-lg
              hover:bg-slate-800
              transition
              cursor-pointer
            "
          >
            <p className="truncate text-sm text-wrap">{chat.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
