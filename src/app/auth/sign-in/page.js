"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession(); // Get session and status
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // 🔐 If logged in, redirect to profile page
  useEffect(() => {
    if (status === "authenticated") {
      console.log("✅ Session Data:", session);
      console.log("🪪 Access Token:", session?.accessToken);
      console.log("📧 Email:", session?.user?.email);
      router.push("/profile");
    }
  }, [status, session, router]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-page">
      <div className="rounded-4 bg-white shadow-sm p-4 text-center" style={{ width: "360px" }}>
        <h4 className="fw-bold mb-4">Sign In to recharge Direct</h4>

        {error && <div className="alert alert-danger py-1">{error}</div>}

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control rounded-pill px-3 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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

        <div className="text-end mb-3">
          <Link href="/auth/forgot-password" className="text-muted text-decoration-none small">
            Recover Password?
          </Link>
        </div>

        <button className="btn btn-primary w-100 rounded-pill mb-3" onClick={handleLogin}>
          Sign In
        </button>

        <div className="text-muted mb-2">Or continue with</div>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <button
            className="btn btn-light rounded-circle border"
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
          >
            <FaGoogle />
          </button>
          <button className="btn btn-light rounded-circle border" onClick={() => signIn("apple")}>
            <FaApple />
          </button>
          <button className="btn btn-light rounded-circle border" onClick={() => signIn("facebook")}>
            <FaFacebook />
          </button>
        </div>

        <div className="text-center">
          <p className="text-muted mb-0">
            If you don’t have an account{" "}
            <Link href="/auth/register" className="text-primary fw-semibold">
              Register here!
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          background: linear-gradient(135deg, #f0f4ff, #ffffff);
        }
      `}</style>
    </div>
  );
}
