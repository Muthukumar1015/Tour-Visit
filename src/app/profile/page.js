"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaCamera } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/sign-in");
    }
  }, [status, router]);

  // Load image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem("customProfileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
    if (session) {
      console.log("✅ Session:", session);
      console.log("🪪 Token:", session.accessToken);
    }
  }, [session]);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result;
        setProfileImage(base64);
        localStorage.setItem("customProfileImage", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("customProfileImage");
    signOut({ callbackUrl: "/auth/sign-in" });
  };

  if (status === "loading") {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-3">👋 Welcome, {session?.user?.name || session?.user?.email}</h2>

      <div className="position-relative d-inline-block">
        <img
          src={profileImage || session?.user?.image || "/default-avatar.png"}
          alt="Profile"
          width={120}
          height={120}
          className="rounded-circle border border-2"
        />

        {!profileImage && (
          <button
            className="position-absolute bottom-0 end-0 bg-white border rounded-circle p-2"
            onClick={() => fileInputRef.current.click()}
            style={{ border: "1px solid #ccc" }}
          >
            <FaCamera />
          </button>
        )}

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="d-none"
        />
      </div>

      <p className="mt-3">{session?.user?.email}</p>

      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
