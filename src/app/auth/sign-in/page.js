"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setError("");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/home"); // Redirect after login
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-page">
      <div className="rounded-4 bg-white shadow-sm p-4 text-center" style={{ width: "360px" }}>
        <div className="position-absolute top-0 end-0 p-3">
          <select className="form-select form-select-sm border-0 bg-transparent" style={{ width: "100px" }}>
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

        <h4 className="fw-bold mb-4">Sign In to recharge Direct</h4>

        {/* Error Message */}
        {error && <div className="alert alert-danger py-1">{error}</div>}

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control rounded-pill px-3 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <div className="position-relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="form-control rounded-pill px-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="position-absolute top-50 end-0 translate-middle-y pe-3"
            style={{ cursor: "pointer" }}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Recover Password */}
        <div className="text-end mb-3">
          <Link href="/auth/forgot-password" className="text-muted text-decoration-none small">
            Recover Password?
          </Link>
        </div>

        {/* Submit */}
        <button className="btn btn-primary w-100 rounded-pill mb-3" onClick={handleLogin}>
          Sign In
        </button>

        {/* Divider */}
        <div className="text-muted mb-2">Or continue with</div>

        {/* Social Logins */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <button className="btn btn-light rounded-circle border" onClick={() => signIn("google")}>
            <FaGoogle />
          </button>
          <button className="btn btn-light rounded-circle border" onClick={() => signIn("apple")}>
            <FaApple />
          </button>
          <button className="btn btn-light rounded-circle border" onClick={() => signIn("facebook")}>
            <FaFacebook />
          </button>
        </div>

        {/* Register Redirect */}
        <div className="text-center">
          <p className="text-muted mb-0">
            If you don’t have an account{" "}
            <Link href="/auth/register" className="text-primary fw-semibold">
              Register here!
            </Link>
          </p>
        </div>
      </div>

      {/* Page Background */}
      <style jsx>{`
        .login-page {
          background: linear-gradient(135deg, #f0f4ff, #ffffff);
        }
      `}</style>
    </div>
  );
}
