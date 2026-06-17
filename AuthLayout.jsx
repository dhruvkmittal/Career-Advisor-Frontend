import AuroraBackground from "../AuroraBackground";
import ParticleNetwork from "../ParticleNetwork";

export default function AuthLayout({ title, subtitle, maxWidth, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <AuroraBackground />

      <div
        className="
          absolute
          top-[-200px]
          left-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-600/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/20
          blur-3xl
        "
      />

      {/* Particles */}

      <ParticleNetwork />

      {/* Login Card */}

      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-4
        "
      >
        <div
          className={`
            w-full
            ${maxWidth || "max-w-md"}
            bg-slate-900/60
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-8
            shadow-2xl
          `}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4 text-5xl font-bold text-white">
              Career<span className="text-indigo-400">AI</span>
            </div>
            <h1 className="text-3xl font-bold text-white">{title}</h1>

            <p className="text-slate-400 mt-2">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
