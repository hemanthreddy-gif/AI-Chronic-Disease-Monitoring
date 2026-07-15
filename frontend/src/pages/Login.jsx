import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function Login() {
    const { login } = useAuth();

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");

            await login(username, password);

            navigate("/");
        } catch {
            setError("Invalid username or password.");
        }
    };

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "100px auto",
            }}
        >
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>
            </form>

            <br />

            <p
                style={{
                    color: "red",
                }}
            >
                {error}
            </p>
        </div>
    );
}

export default Login;