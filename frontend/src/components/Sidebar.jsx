import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div
            className="bg-success text-white p-3"
            style={{
                width: "260px",
                minHeight: "100vh",
            }}
        >
            <h3 className="mb-4">
                AI Health
            </h3>

            <div className="nav flex-column">

                <Link
                    to="/"
                    className="nav-link text-white"
                >
                    Dashboard
                </Link>

                <Link
                    to="/health-records"
                    className="nav-link text-white"
                >
                    Health Records
                </Link>

                <Link
                    to="/ai-summary"
                    className="nav-link text-white"
                >
                    AI Summary
                </Link>

                <Link
                    to="/profile"
                    className="nav-link text-white"
                >
                    Profile
                </Link>

            </div>
        </div>
    );
}

export default Sidebar;