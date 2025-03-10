import React from 'react';
import jusb_logo from '../assets/img/jusb_logo.webp';
import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./CSS/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-sky-950 text-white font-Josefin pb-5 pt-9 ">
        <div className="footer-grid mb-4 w-[90vw]  mx-auto gap-[15px] lg:gap-[20px]  ">
          <div className="footer-div">
            <h4 className="footer-header">IEEE JUSB</h4>
            <p className="text-[16px] list-items">
              The Jadavpur University IEEE student branch, founded in 2010,
              belongs to the Kolkata section of Region 10 of the organization.
              We are a group of enthusiastic students who are promoting
              innovative ideas both within and outside the campus.
            </p>
          </div>
          <div className="footer-div">
            <h4 className="footer-header">Useful Links</h4>
            <div className="list-div ">
              <a href="/" className="list-items hover-link">
                Homes
              </a>
              <a href="/#about" className="list-items hover-link">
                About Us
              </a>
              <a href="/#chapter  " className="list-items hover-link">
                Chapters
              </a>
              <a href="/events" className="list-items hover-link">
                Events
              </a>
              <a href="/#sponsor" className="list-items hover-link">
                Sponsors
              </a>
              <a href="/team" className="list-items hover-link">
                Team
              </a>
            </div>
          </div>
          <div className="footer-div">
            <h4 className="footer-header">Contact Us</h4>
            <p className="list-items">
              Jadavpur University 188, Raja S.C. Mallick Rd, Kolkata-700032
              India
            </p>
            <p className="list-items">Phone: +91 98361 05125</p>
            <p className="list-items">Email: <a href="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</a></p>
          </div>
          <div className="footer-div">
            <h4 className="footer-header">Follow Us</h4>
            <div className="grid grid-cols-4 items-center place-items-center max-w-[220px] mx-auto lg:place-items-start lg:mx-0 ">
                <a
                  href="https://twitter.com/IeeeJadavpur"
                  target="blank"
                >
                  <BsTwitterX className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </a>
                <a
                  href="https://www.facebook.com/ieeejusb"
                  target="blank"
                >
                  <FaFacebook className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </a>
                <a
                  href="https://www.instagram.com/_ieeeju/"
                  target="blank"
                >
                  <FaInstagram className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ieee-ju"
                  target="blank"
                >
                  <FaLinkedin className="footer-icons transition-colors duration-150 ease-in-out hover:text-blue-700" />
                </a>
              </div>
          </div>
        </div>
        <div className="mx-auto h-[2px] w-[90vw] bg-white rounded"></div>
        <div className="flex flex-col justify-between items-center text-sm mt-3 h-[55px]">
          <p className="mt-2 mb-2">
            © Copyright IEEE-JUSB. All Rights Reserved
          </p>
          <p className="mb-5">
            Made with <FaHeart className="inline text-red-500 mx-1" /> by IEEE
            JUSB
          </p>
        </div>
      </footer>
    </div>
  );
}
