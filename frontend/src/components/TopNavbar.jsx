import { useAuth } from "../context/AuthContext";

function TopNavbar() {

    const { user, logout } = useAuth();

    return (

        <nav className="navbar navbar-light bg-white shadow-sm px-4">

            <span className="navbar-brand fw-bold">

                AI-Assisted Chronic Disease Management

            </span>

            <div className="d-flex align-items-center">

                <span className="me-3">

                    Welcome,

                    {" "}

                    <strong>

                        {user?.username}

                    </strong>

                </span>

                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );
}

export default TopNavbar;