// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="bg-light">

            {/* Hero Section */}
            <section className="py-5 text-center bg-primary text-white">
                <div className="container">
                    <h1 className="display-4 fw-bold">About Us</h1>
                    <p className="lead">We make user management simple, fast, and secure.</p>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        {[
                            {
                                title: "Our Mission",
                                text: "To provide a seamless platform for managing user information with efficiency and security.",
                            },
                            {
                                title: "Our Vision",
                                text: "To become the go-to solution for user management across businesses and communities.",
                            },
                            {
                                title: "Our Values",
                                text: "Integrity, security, and simplicity drive everything we do.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="col-md-4">
                                <div className="card shadow-sm h-100">
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-primary">{item.title}</h5>
                                        <p className="card-text">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="text-primary mb-4">Get in Touch</h2>
                    <p className="mb-3">Have questions or feedback? Reach out to us at:</p>
                    <p className="fw-bold">manishrajrnl@zohomail.in</p>
                    <Link to="/" className="btn btn-primary mt-3">
                        Back to Home
                    </Link>
                </div>
            </section>

        </div>
    );
}

export default About;
