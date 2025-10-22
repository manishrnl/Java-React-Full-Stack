// src/pages/AddUser.jsx
import { useState } from "react";
import { addUser } from "../service/userService"; // ✅ Correct path

const AddUser = () => {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        mobile: "",
        aadhar: "",
        age: "",
        password: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Optional: restrict numeric inputs
        if (["mobile", "aadhar", "age"].includes(name)) {
            if (!/^\d*$/.test(value)) return; // allow only digits
        }

        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (user.aadhar.length !== 12) {
            setErrorMessage("Aadhar number must be 12 digits.");
            setSuccessMessage("");
            return;
        }

        try {
            const response = await addUser(user); // call backend
            console.log("User saved:", response.data);

            setSuccessMessage("User added successfully!");
            setErrorMessage("");

            // Reset form
            setUser({
                fullname: "",
                email: "",
                mobile: "",
                aadhar: "",
                age: "",
                password: "",
            });
        } catch (error) {
            console.error("Error adding user:", error);
            setErrorMessage("Failed to add user. Please try again.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center">
                <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "50%" }}>
                    <h2 className="card-title text-center mb-4 text-primary">
                        Enter Your Information
                    </h2>

                    {errorMessage && (
                        <div className="alert alert-danger text-center">{errorMessage}</div>
                    )}
                    {successMessage && (
                        <div className="alert alert-success text-center">{successMessage}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {[
                            { name: "fullname", type: "text" },
                            { name: "email", type: "email" },
                            { name: "mobile", type: "tel" },
                            { name: "aadhar", type: "text" },
                            { name: "age", type: "number" },
                            { name: "password", type: "password" },
                        ].map((field) => (
                            <div key={field.name} className="mb-3">
                                <label className="form-label text-capitalize">{field.name}</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    className="form-control"
                                    placeholder={`Enter ${field.name}`}
                                    value={user[field.name]}
                                    onChange={handleChange}
                                    required
                                    maxLength={field.name === "aadhar" ? 12 : undefined}
                                />
                            </div>
                        ))}

                        <div className="d-grid mt-4">
                            <button type="submit" className="btn btn-primary btn-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;

