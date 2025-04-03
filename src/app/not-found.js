"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <Image src="images/404.svg" alt="404 Not Found" width={500} height={300} />
      <h1 className="fw-bold text-primary">404</h1>
      <h2>Oops! It looks like you're lost.</h2>
      <p className="text-muted">
        The page you're looking for isn't available. Try searching again or use the go-to button.
      </p>
      <button className="btn btn-primary mt-3" onClick={() => router.push("/")}>
        Go back to homepage
      </button>
    </div>
  );
}
