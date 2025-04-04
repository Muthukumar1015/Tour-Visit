"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const blogPosts = [
  {
    id: 1,
    title: "10 European ski destinations you should visit this winter",
    date: "Jan 06, 2023",
    image: "/images/ski-destination.png",
  },
  {
    id: 2,
    title: "Booking travel during Corona: good advice in an uncertain time",
    date: "April 06, 2022",
    image: "/images/green-mountain.png",
  },
  {
    id: 3,
    title: "Where can I go? 5 amazing countries that open right now",
    date: "Jan 06, 2023",
    image: "/images/beach-family.png",
  },
];

const InspirationSection = () => {
  return (
    <>
      <Head>
        <title>Get Inspiration for Your Next Trip | Travel Blog</title>
        <meta
          name="description"
          content="Explore amazing travel destinations and tips for your next trip. Find the best places to visit and get inspired for your journey."
        />
      </Head>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Get inspiration for your next trip</h2>
          <p className="text-muted">Interdum et malesuada fames</p>

          <div className="row mt-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card border-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="card-img-top rounded"
                  />
                  <div className="card-body">
                    <h6 className="fw-semibold">{post.title}</h6>
                    <p className="text-muted">{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Not a Member Yet Section */}
          <div className="mt-5">
            <h4 className="fw-bold">Not a Member Yet?</h4>
            <p className="text-muted">
              Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/auth/login" passHref>
                <button className="btn btn-primary">
                  Sign In <span className="ms-1">↗</span>
                </button>
              </Link>
              <Link href="/auth/login" passHref>
                <button className="btn btn-outline-primary">
                  Register <span className="ms-1">↗</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .card-img-top {
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default InspirationSection;
