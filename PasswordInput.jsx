import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label = "Password",
  value,
  onChange,
  placeholder = "Enter your password",
  name,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      <label className="block text-sm text-slate-300 mb-2">{label}</label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            pr-12
            outline-none
            focus:border-indigo-500
            text-white
            transition
          "
        />

        <button
          type="button"
          title={showPassword ? "Hide Password" : "Show Password"}
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            hover:text-white
            transition
            cursor-pointer
          "
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    
    </div>
  );
}
