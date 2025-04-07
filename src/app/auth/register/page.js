"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Store to localStorage (demo only - use DB in production)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find((u) => u.email === email);

    if (userExists) {
      setError("User already exists. Please sign in.");
      return;
    }

    storedUsers.push({ email, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));
    setError("");

    // Auto-login after registration using credentials
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/home");
    } else {
      setError("Registration successful, but login failed.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 register-page">
      <div className="rounded-4 bg-white shadow-sm p-4 text-center" style={{ width: "360px" }}>
        <h4 className="fw-bold mb-4">Create Account</h4>

        {error && <div className="alert alert-danger py-1 small">{error}</div>}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          className="form-control rounded-pill px-3 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="position-relative mb-3">
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

        <button className="btn btn-primary w-100 rounded-pill mb-3" onClick={handleRegister}>
          Register
        </button>

        <div className="text-muted mb-2">or continue with</div>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <button
            className="btn btn-light rounded-circle border"
            onClick={() => signIn("google")}
          >
            <FaGoogle />
          </button>
          <button className="btn btn-light rounded-circle border" disabled>
            <FaApple />
          </button>
          <button className="btn btn-light rounded-circle border" disabled>
            <FaFacebook />
          </button>
        </div>

        <p className="text-muted mb-0">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-primary fw-semibold">
            Sign In
          </Link>
        </p>
      </div>

      <style jsx>{`
        .register-page {
          background: linear-gradient(135deg, #f0f4ff, #ffffff);
        }
      `}</style>
    </div>
  );
}
