"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay, FaEnvelope, FaPhone, FaGlobe, FaDollarSign } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Head>
        <title>GoTrip | Best Travel Deals</title>
        <meta name="description" content="Plan your perfect trip with GoTrip. Book flights, hotels, and activities at the best prices." />
      </Head>

      <footer className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center text-md-start">
            
            {/* Logo and Contact Info */}
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <h5 className="fw-bold">GoTrip</h5>
              <p className="small"><FaPhone className="me-2" /> Toll-Free Customer Care</p>
              <p className="fw-bold">+1 (123) 456-7890</p>
              <p className="small"><FaEnvelope className="me-2" /> Need live support?</p>
              <p className="fw-bold">hi@gotrip.com</p>
              <div className="mt-3">
                <button className="btn btn-light btn-sm me-2">
                  <FaApple className="me-1" /> Apple Store
                </button>
                <button className="btn btn-light btn-sm">
                  <FaGooglePlay className="me-1" /> Google Play
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-md-3 col-sm-6 col-12 mb-4">
              <h6 className="fw-bold">Get Updates & More</h6>
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your Email" />
                <button className="btn btn-dark">
                  <FaEnvelope className="me-1" /> Subscribe
                </button>
              </div>
            </div>

            {/* Links - Company */}
            <div className="col-md-2 col-sm-6 col-12 mb-4">
              <h6 className="fw-bold">Company</h6>
              <ul className="list-unstyled small">
                <li className="mb-2"><Link href="#" className="text-white">About Us</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Careers</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Blog</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Press</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Gift Cards</Link></li>
              </ul>
            </div>

            {/* Links - Support */}
            <div className="col-md-2 col-sm-6 col-12 mb-4">
              <h6 className="fw-bold">Support</h6>
              <ul className="list-unstyled small">
                <li className="mb-2"><Link href="#" className="text-white">Contact</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Legal Notice</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Privacy Policy</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Terms & Conditions</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Sitemap</Link></li>
              </ul>
            </div>

            {/* Links - Other Services */}
            <div className="col-md-2 col-sm-6 col-12 mb-4">
              <h6 className="fw-bold">Other Services</h6>
              <ul className="list-unstyled small">
                <li className="mb-2"><Link href="#" className="text-white">Car Hire</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Activity Finder</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Tour List</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Flight Finder</Link></li>
                <li className="mb-2"><Link href="#" className="text-white">Travel Agents</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-4 d-flex justify-content-center gap-3">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>

          {/* Language and Currency */}
          <div className="mt-4 text-center small">
            <p>&copy; 2023 GoTrip. All rights reserved.</p>
            <p>
              <Link href="#" className="text-white">Privacy</Link> | 
              <Link href="#" className="text-white"> Terms</Link> | 
              <Link href="#" className="text-white"> Site Map</Link>
            </p>
            <p>
              <FaGlobe className="me-1" /> English (US) | <FaDollarSign className="me-1" /> USD
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
