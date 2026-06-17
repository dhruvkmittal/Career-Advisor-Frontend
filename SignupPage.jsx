import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import { validateSignupForm } from "../utils/signupValidations";

export default function SignupPage() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const validationErrors = validateSignupForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Valid Form", formData);
  };

  return (
    <AuthLayout
      title="Create Account 🚀"
      subtitle="Start your personalized career journey"
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSignup}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AuthInput
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            error={errors.fullName}
          />

          <AuthInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            error={errors.email}
          />

          <AuthInput
            label="Contact Number"
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="+91 9876543210"
            error={errors.contactNumber}
          />

          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-medium transition cursor-pointer"
        >
          Create Account
        </button>

        <div className="mt-6 text-center">
          <span className="text-slate-400">Already have an account?</span>

          <Link
            to="/login"
            className="
              ml-2
              text-indigo-400
              hover:text-indigo-300
            "
          >
            Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
