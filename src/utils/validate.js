export const checkValidata = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email.trim());

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isValidPassword = passwordRegex.test(password);

    if (!isValidEmail) return "Email id not valid";

    if (!isValidPassword)
        return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";

    return null;
}