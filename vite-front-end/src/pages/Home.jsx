// src/pages/Home.jsx
const Home = () => {
    return (
        <div className="bg-light">

            {/* Hero Section */}
            <section className="py-5 text-center bg-primary text-white">
                <div className="container-fluid px-5">
                    <h1 className="display-4 fw-bold">Welcome to Home Page</h1>
                    <p className="lead mb-4">
                        Easily manage users, track details, and keep your data secure.
                    </p>
                    <a href="/form" className="btn btn-light btn-lg me-2">
                        Add User
                    </a>
                    <a href="/users" className="btn btn-outline-light btn-lg">
                        View Users
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5 bg-light">
                <div className="container-fluid px-5">
                    <h2 className="text-center text-primary mb-5">Features</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100 text-center p-3">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">User Registration</h5>
                                    <p className="card-text">
                                        Add new users easily with a simple, secure form.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100 text-center p-3">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">User List</h5>
                                    <p className="card-text">
                                        View all registered users in a clean and sortable table.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100 text-center p-3">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">Secure Data</h5>
                                    <p className="card-text">
                                        User information is stored safely and handled securely.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-5 bg-primary text-center text-white">
                <div className="container-fluid px-5">
                    <h2 className="mb-3">Get Started Now</h2>
                    <p className="mb-4">
                        Add a user or view existing users to explore the app features.
                    </p>
                    <a href="/form" className="btn btn-light btn-lg me-2">
                        Add User
                    </a>
                    <a href="/users" className="btn btn-outline-light btn-lg">
                        View Users
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Home;
