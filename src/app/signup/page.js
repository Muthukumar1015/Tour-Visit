"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  // ✅ Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("Invalid email or password.");
    } else {
      router.push("/dashboard");
    }
  };

  // ✅ Handle Signup
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !phone || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, phone, email, password }),
    });

    const data = await res.json();

    if (res.status === 201) {
      alert("Registration successful! You can now log in.");
      setIsLogin(true);
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <Head>
        <title>{isLogin ? "Log In" : "Sign Up"} | My Website</title>
        <meta name="description" content="Sign up or log in to access our platform." />
      </Head>

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center mb-4">{isLogin ? "Log In" : "Sign Up"}</h3>
          <p className="text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <a href="#" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Log in"}
            </a>
          </p>

          {/* Login Form */}
          {isLogin ? (
            <form onSubmit={handleLogin}>
              <input type="email" className="form-control mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className="text-end">
                <a href="#" className="text-primary">Forgot Password?</a>
              </div>
              <button className="btn btn-primary w-100" type="submit">Log In</button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleRegister}>
              <input type="text" className="form-control mb-2" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <input type="text" className="form-control mb-2" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <input type="text" className="form-control mb-2" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <input type="email" className="form-control mb-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <input type="password" className="form-control mb-2" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <button className="btn btn-primary w-100" type="submit">Sign Up</button>
            </form>
          )}

          <div className="text-center mt-3">or sign in with</div>

          {/* Social Login Buttons */}
          <button className="btn btn-outline-primary w-100 mt-2" onClick={() => signIn("facebook")}>
            <FaFacebook className="me-2" /> Facebook
          </button>
          <button className="btn btn-outline-danger w-100 mt-2" onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })}>
            <FaGoogle className="me-2" /> Google
          </button>
        </div>
      </div>
    </>
  );
}
