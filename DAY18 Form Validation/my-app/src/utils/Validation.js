export const validateForm = (values, rules = {}) => {
    console.info("🚀 ~ validateForm ~ rules:", rules);
    console.info("🚀 ~ validateForm ~ values:", values);

    const errors = {};

    Object.keys(rules).forEach((field) => {
        const value = values[field] || "";
        const fieldRules = rules[field];


        // ✅ Required check
        if (fieldRules.isRequired && !value.trim()) {
            errors[field] = fieldRules.msg?.isRequired || `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;

            console.info("🚀 ~ validateForm ~ fieldRules.msg:", fieldRules?.msg?.isRequired)
            return; // stop further checks on this field once error found
        }

        // ✅ Min Length check
        if (fieldRules.minLength && value.length < fieldRules.minLength) {
            errors[field] =
                fieldRules.msg.minLength || `${field} must be at least ${fieldRules.minLength} characters`;
            console.info("🚀 ~ validateForm ~ fieldRules.msg.minLength:", fieldRules?.msg?.minLength)
            return;
        }


        // ✅ Email pattern (if provided as string "email")
        if (fieldRules.pattern === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errors[field] = fieldRules.msg || `Invalid email format`;
                return;
            }
        }

        // ✅ Custom Regex (if provided directly as RegExp)
        if (fieldRules.pattern instanceof RegExp) {
            if (!fieldRules.pattern.test(value)) {
                errors[field] = fieldRules.msg || `${field} format is invalid`;
                return;
            }
        }
    });

    return errors;
};
