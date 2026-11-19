import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { registerUser, resetPassword } from "../api/authService";
import "./Login.css";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [mode, setMode] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [form, setForm] = useState({
        username: "",
        email: "",
        fullName: "",
        password: "",
        confirmPassword: "",
    });

    const update = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        setError("");
    };

    const switchMode = (nextMode) => {
        setMode(nextMode);
        setError("");
        setSuccess("");
        setShowPassword(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (mode === "login") {
            if (!form.username || !form.password) {
                setError("Enter your user ID and password.");
                return;
            }
            setBusy(true);
            try {
                await login(form.username, form.password);
                navigate("/");
            } catch {
                setError("Invalid user ID or password.");
            } finally {
                setBusy(false);
            }
            return;
        }

        if (form.password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setBusy(true);
        try {
            if (mode === "register") {
                await registerUser({
                    username: form.username,
                    email: form.email,
                    full_name: form.fullName || null,
                    password: form.password,
                });
                setSuccess("Account created successfully. You can sign in now.");
                setForm({ ...form, password: "", confirmPassword: "" });
                setMode("login");
            } else {
                await resetPassword(form.username, form.email, form.password);
                setSuccess("Password updated successfully. Sign in with your new password.");
                setForm({ ...form, password: "", confirmPassword: "" });
                setMode("login");
            }
        } catch (requestError) {
            setError(requestError.response?.data?.detail || "We could not complete this request.");
        } finally {
            setBusy(false);
        }
    };

    const title = mode === "login"
        ? "Welcome back"
        : mode === "register"
            ? "Create your account"
            : "Reset your password";

    return (
        <main className="auth-page">
            <section className="auth-brand-panel" aria-label="Health platform introduction">
                <div className="brand">
                    <span className="brand-mark" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18" /></svg>
                    </span>
                    <span>ChronicCare<span>AI</span></span>
                </div>

                <div className="brand-copy">
                    <p className="eyebrow">HEALTH MONITORING, SIMPLIFIED</p>
                    <h1>Your health story,<br />all in one place.</h1>
                    <p className="brand-description">
                        Track vital records, understand trends, and receive clear AI-assisted guidance for better daily care.
                    </p>
                    <div className="feature-row">
                        <div><span>01</span><b>Monitor</b><small>Track key health metrics</small></div>
                        <div><span>02</span><b>Understand</b><small>See patterns over time</small></div>
                        <div><span>03</span><b>Improve</b><small>Get personalized insights</small></div>
                    </div>
                </div>
            </section>

            <section className="auth-form-panel">
                <div className="auth-card">
                    <div className="auth-heading">
                        <p>{mode === "login" ? "PATIENT PORTAL" : "ACCOUNT SERVICES"}</p>
                        <h2>{title}</h2>
                        <span>
                            {mode === "login"
                                ? "Sign in to continue to your dashboard"
                                : mode === "register"
                                    ? "Set up secure access to your health data"
                                    : "Verify your account to choose a new password"}
                        </span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>User ID</span>
                            <div className="input-wrap">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
                                <input name="username" value={form.username} onChange={update} placeholder="Enter your user ID" autoComplete="username" />
                            </div>
                        </label>

                        {mode !== "login" && (
                            <label>
                                <span>Email address</span>
                                <div className="input-wrap">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                                    <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" />
                                </div>
                            </label>
                        )}

                        {mode === "register" && (
                            <label>
                                <span>Full name <small>(optional)</small></span>
                                <div className="input-wrap">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
                                    <input name="fullName" value={form.fullName} onChange={update} placeholder="Your name" autoComplete="name" />
                                </div>
                            </label>
                        )}

                        <label>
                            <span>{mode === "login" ? "Password" : "New password"}</span>
                            <div className="input-wrap">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
                                <input name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={update} placeholder={mode === "login" ? "Enter your password" : "At least 8 characters"} autoComplete={mode === "login" ? "current-password" : "new-password"} />
                                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </label>

                        {mode !== "login" && (
                            <label>
                                <span>Confirm password</span>
                                <div className="input-wrap">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
                                    <input name="confirmPassword" type={showPassword ? "text" : "password"} value={form.confirmPassword} onChange={update} placeholder="Repeat your password" autoComplete="new-password" />
                                </div>
                            </label>
                        )}

                        {mode === "login" && (
                            <button type="button" className="text-link forgot-link" onClick={() => switchMode("reset")}>Forgot password?</button>
                        )}

                        {error && <div className="auth-message error" role="alert">{error}</div>}
                        {success && <div className="auth-message success" role="status">{success}</div>}

                        <button className="primary-auth-button" type="submit" disabled={busy}>
                            {busy ? "Please wait..." : mode === "login" ? "Sign in" : mode === "register" ? "Create account" : "Update password"}
                            <span aria-hidden="true">→</span>
                        </button>
                    </form>

                    <div className="auth-switch">
                        {mode === "login" ? (
                            <>New to ChronicCareAI? <button type="button" onClick={() => switchMode("register")}>Create an account</button></>
                        ) : (
                            <button type="button" onClick={() => switchMode("login")}>← Back to sign in</button>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
