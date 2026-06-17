import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

export default function ChatHeader({
  isAuthenticated,
  onMenuClick,
}) {
  const navigate = useNavigate();

  return (
    <header className="border-b border-slate-800 backdrop-blur-md bg-slate-950/80">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-3">

          {/* Mobile Hamburger */}
          <button
            onClick={onMenuClick}
            className="
              md:hidden
              p-2
              rounded-lg
              hover:bg-slate-800
              transition
            "
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="font-semibold text-lg text-white">
              <button
                onClick={() => navigate("/")}
                className="cursor-pointer text-2xl"
              >
                Career<span className="text-indigo-400">AI</span>
              </button>
            </h1>

            <p className="text-xs text-slate-400">
              Personalized career guidance
            </p>
          </div>

        </div>

        {/* Right Section */}
        {!isAuthenticated ? (
          <div className="flex items-center gap-2 md:gap-3">

            <button
              className="
                text-slate-300
                hover:text-white
                transition
                cursor-pointer
                text-sm md:text-base
              "
              onClick={()=> navigate("/login")}
            >
              Login
            </button>

            <button
              className="
                bg-indigo-600
                hover:bg-indigo-700
                px-3 md:px-4
                py-2
                rounded-lg
                text-sm
                font-medium
                cursor-pointer
              "
              onClick={()=> navigate("/signup")}
            >
              Sign Up
            </button>

          </div>
        ) : (
          <button
            className="
              bg-slate-800
              px-4
              py-2
              rounded-lg
            "
          >
            Profile
          </button>
        )}

      </div>
    </header>
  );
}