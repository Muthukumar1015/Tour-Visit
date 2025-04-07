"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function WelcomeScreen() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="welcome-screen d-flex justify-content-center align-items-center vh-100">
      <div className="rounded-4 shadow-sm position-relative p-3 bg-white" style={{ width: "400px", height: "50%", border: "4px solidrgb(250, 6, 6)" }}>
        
        {/* Language Selector */}
        <div className="position-absolute top-0 end-0 p-3">
          <select
            className="form-select form-select-sm border-0 bg-transparent"
            style={{ width: "100px" }}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Tamil</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Image */}
        <div className="d-flex justify-content-center mt-5">
          <Image
            src="/images/Character 1.png" // 👈 Replace with your local image path
            alt="Welcome Illustration"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-2 mt-4">
          <Link href="/auth/sign-in" passHref>
            <button className="btn btn-primary px-4 rounded-pill">Sign In</button>
          </Link>
          <Link href="/auth/register" passHref>
            <button className="btn btn-outline-primary px-4 rounded-pill">Register</button>
          </Link>
        </div>

        {/* Skip */}
        <div className="text-center mt-3">
          <Link href="/home" className="text-primary text-decoration-none fw-bold">Skip &gt;&gt;</Link>
        </div>
      </div>

      {/* Internal Styles */}
      <style jsx>{`
        .welcome-screen {
          background: linear-gradient(135deg, #f0f4ff, #ffffff);
        }
      `}</style>
    </div>
  );
}
