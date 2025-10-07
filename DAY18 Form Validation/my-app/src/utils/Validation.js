// src/utils/validation.js

export const validateForm = (values) => {
    const errors = {};

    // Name validation
    if (!values.name.trim()) {
        errors.name = "Name is required";
    } else if (values.name.length < 2) {
        errors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email address";
    }

    // Password validation
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }
    // Age validation
    if (!values.age) {
        errors.age = "Age is required";
    } else if (isNaN(values.age)) {
        errors.age = "Age must be a number";
    } else if (values.age < 18 || values.age > 100) {
        errors.age = "Age must be between 18 and 100";
    }


    // Gender validation
    if (!values.gender) {
        errors.gender = "Please select a gender";
    }

    // Country validation
    if (!values.country) {
        errors.country = "Please select a country";
    }

    // Date of Birth validation
    if (!values.dob) {
        errors.dob = "Date of birth is required";
    } else {
        const dobDate = new Date(values.dob);
        const today = new Date();
        const age = today.getFullYear() - dobDate.getFullYear();
        if (age < 18) {
            errors.dob = "You must be at least 18 years old";
        }
    }

    // Message validation
    if (!values.message.trim()) {
        errors.message = "Message is required";
    } else if (values.message.length < 10) {
        errors.message = "Message must be at least 10 characters";
    }

    // Terms validation
    if (!values.terms) {
        errors.terms = "You must accept the terms and conditions";
    }

    return errors;
};