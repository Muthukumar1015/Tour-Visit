"use client";

import { signIn } from "next-auth/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg text-center" style={{ width: "400px" }}>
        <h3 className="mb-3">Sign In</h3>

        {/* Google Sign-In */}
        <button
          className="btn btn-danger w-100 mb-3 d-flex align-items-center justify-content-center"
          onClick={() => signIn("google")}
        >
          <FaGoogle className="me-2" size={20} /> Sign in with Google
        </button>

        {/* Facebook Sign-In */}
        <button
          className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
          onClick={() => signIn("facebook")}
        >
          <FaFacebook className="me-2" size={20} /> Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
