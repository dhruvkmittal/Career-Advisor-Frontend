const prompts = [
  "How do I become a Solution Architect?",
  "Create a Java Developer roadmap",
  "Which skills are trending in 2026?",
  "How can I switch into AI Engineering?",
];

export default function SuggestedPrompts({ onPromptClick }) {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onPromptClick(prompt)}
          className="
            px-4
            py-2
            rounded-full
            border
            border-slate-700
            bg-slate-900
            hover:bg-slate-800
            transition-all
            text-sm
            text-slate-300
            cursor-pointer
          "
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
