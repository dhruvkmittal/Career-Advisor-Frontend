export const validateSignupForm = (formData) => {
  const errors = {};

  // Full Name
  if (!formData.fullName) {
    errors.fullName = "Full Name is required";
  } else if (!formData.fullName.trim()) {
    errors.fullName = "Full Name is required";
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = "Full Name must be at least 3 characters";
  } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
    errors.fullName = "Full Name can contain only letters";
  }

  // Email
  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email address";
  }

  // Contact Number
  if (!formData.contactNumber) {
    errors.contactNumber = "Contact Number is required";
  } else if (!formData.contactNumber.trim()) {
    errors.contactNumber = "Contact Number is required";
  } else if (!/^\d{10}$/.test(formData.contactNumber)) {
    errors.contactNumber = "Contact Number must be 10 digits";
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      formData.password,
    )
  ) {
    errors.password =
      "Password must contain uppercase, lowercase,length of 8, number and special character";
  }

  // Confirm Password
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords does not match";
  }

  return errors;
};
