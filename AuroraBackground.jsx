export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Top Glow */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-150px]
          w-[600px]
          h-[600px]
          bg-indigo-600/30
          rounded-full
          blur-[150px]
          animate-pulse
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          bottom-[-250px]
          right-[-150px]
          w-[700px]
          h-[700px]
          bg-purple-600/30
          rounded-full
          blur-[180px]
          animate-pulse
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-cyan-500/10
          rounded-full
          blur-[120px]
        "
      />
    </div>
  );
}