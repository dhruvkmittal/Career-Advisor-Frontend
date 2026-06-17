export const validateLoginForm = (email, password) => {
  const errors = {};

  // Email
  if (!email) {
    errors.email = "Email is required";
  } else if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address";
  }

  // Password
  if (!password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      password,
    )
  ) {
    errors.password =
      "Password must contain uppercase, lowercase,length of 8, number and special character";
  }

  return errors;
};
