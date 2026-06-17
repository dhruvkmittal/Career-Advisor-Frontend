import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuroraBackground from "../components/AuroraBackground";
import ParticleNetwork from "../components/ParticleNetwork";
import PasswordInput from "../components/auth/PasswordInput";
import { validateLoginForm } from "../utils/loginValidations";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm(email,password);
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log({ email, password });
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue your career journey"
    >
      <form onSubmit={handleLogin}>
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          error={errors.email}
        />

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <button
          type="submit"
          className="
            w-full
            bg-indigo-600
            hover:bg-indigo-700
            py-3
            rounded-xl
            font-medium
            transition
            cursor-pointer
          "
        >
          Sign In
        </button>

        <div className="mt-6 text-center">
          <span className="text-slate-400">Don't have an account?</span>

          <Link
            to="/signup"
            className="ml-2 text-indigo-400 hover:text-indigo-300 "
          >
            Sign Up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
