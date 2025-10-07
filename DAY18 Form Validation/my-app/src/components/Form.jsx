import { useState } from "react";
import { validateForm } from "../utils/Validation.js";
import "./Formstyle.css";

const Form = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        country: "",
        dob: "",
        terms: false,
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true,
        });
        setErrors(validateForm(values));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(values);
        setErrors(validationErrors);
        setTouched(
            Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
        );

        if (Object.keys(validationErrors).length === 0) {
            setShowSuccess(true); // show modal
            console.log("Form submitted:", values);

            // Reset form
            setValues({
                name: "",
                email: "",
                password: "",
                age: "",
                gender: "",
                country: "",
                dob: "",
                terms: false,
                message: "",
            });
            setTouched({});
        }
    };

    const closeModal = () => {
        setShowSuccess(false);
    };

    const showError = (field) => touched[field] && errors[field];

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("name") ? "error-border" : ""}
                    />
                    {showError("name") && <span className="error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("email") ? "error-border" : ""}
                    />
                    {showError("email") && <span className="error">{errors.email}</span>}
                </div>

                {/* Password */}
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("password") ? "error-border" : ""}
                    />
                    {showError("password") && <span className="error">{errors.password}</span>}
                </div>

                {/* Age */}
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="text"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("age") ? "error-border" : ""}
                    />
                    {showError("age") && <span className="error">{errors.age}</span>}
                </div>

                {/* Gender */}
                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={values.gender === "male"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={values.gender === "female"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            Female
                        </label>
                    </div>
                    {showError("gender") && <span className="error">{errors.gender}</span>}
                </div>

                {/* Country */}
                <div className="form-group">
                    <label>Country:</label>
                    <select
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("country") ? "error-border" : ""}
                    >
                        <option value="">Select Country</option>
                        <option value="nepal">Nepal</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                    </select>
                    {showError("country") && <span className="error">{errors.country}</span>}
                </div>

                {/* DOB */}
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="dob"
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("dob") ? "error-border" : ""}
                    />
                    {showError("dob") && <span className="error">{errors.dob}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                    <label>Message:</label>
                    <textarea id="meaage"
                        
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={showError("message") ? "error-border" : ""}
                    ></textarea>
                    {showError("message") && <span className="error">{errors.message}</span>}
                </div>

                {/* Terms */}
                <div className="form-group checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={values.terms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        Accept Terms & Conditions
                    </label>
                    {showError("terms") && <span className="error">{errors.terms}</span>}
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            {/* Success Popup Modal */}
            {showSuccess && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3> Form Submitted Successfully!</h3>
                        <p>Thank you for registering. We’ll get back to you soon.</p>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
