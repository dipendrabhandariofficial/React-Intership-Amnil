export const validateForm = (values, type) => {
  const errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }
   else if (values.username.length < 3 ){
      errors.username ="Username must be atleast of 3 characters";
    }

  if (!values.password.trim()) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Signup-only validations
  if (type === "signup") {
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
    else if (values.name.length < 3 ){
      errors.name ="Name must be atleast of 3 characters";
    }
  }

  return errors;
};
