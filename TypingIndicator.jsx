export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl px-2 py-1">
        <div className="flex gap-2">
          <span className="animate-bounce">●</span>
          <span className="animate-bounce [animation-delay:0.2s]">●</span>
          <span className="animate-bounce [animation-delay:0.4s]">●</span>
        </div>
      </div>
    </div>
  );
}
