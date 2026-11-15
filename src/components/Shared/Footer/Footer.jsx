import footerBgImage from "../../../assets/images/more/footer-bg.jpg";
import copyrightBgImage from "../../../assets/images/more/copyright-bg.jpg";
import logo from "../../../assets/images/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center pt-30"
      style={{ backgroundImage: `url(${footerBgImage})` }}
    >
      <div className="max-w-330 mx-auto grid lg:grid-cols-2 items-center justify-between">
        <div className="mb-7">
          <img className="w-18.75 h-22.5 mb-3" src={logo} alt="logo" />
          <h2 className="text-[45px] mb-4 [text-shadow:0_4px_9px_rgba(59,29,26,0.8)]">
            Espresso Emporium
          </h2>
          <p className="text-xl leading-9 mb-5">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-5 mb-5">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-[40px] text-heading" />
            </a>
            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-[40px] text-heading" />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-[40px] text-heading" />
            </a>
            <a
              href="https://linkedin.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[40px] text-heading" />
            </a>
          </div>
          <div>
            <h2 className="text-[45px] mb-4 [text-shadow:0_4px_9px_rgba(59,29,26,0.8)]">
              Get in Touch
            </h2>
            <ul className="space-y-4 text-xl">
              <li>
                <a
                  href="tel:+8801533333333"
                  className="flex items-center gap-5 hover:text-heading"
                >
                  <FaPhoneAlt className="text-xl shrink-0" />
                  <span>+88 01533 333 333</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@gmail.com"
                  className="flex items-center gap-5 hover:text-heading"
                >
                  <MdEmail className="text-2xl shrink-0" />
                  <span>info@gmail.com</span>
                </a>
              </li>

              <li className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-2xl shrink-0" />
                <address className="not-italic">
                  72, Wall street, King Road, Dhaka
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-[45px] mb-4 [text-shadow:0_4px_9px_rgba(59,29,26,0.8)]">
            Connect with Us
          </h2>
          <form className="flex flex-col gap-4 w-full">
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="form-input resize-none"
              rows="5"
              name="message"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="text-heading font-rancho text-2xl border-2 border-heading rounded-4xl w-fit px-5 py-1.75 cursor-pointer hover:shadow-sm hover:shadow-heading"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div
        className="py-2.75 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${copyrightBgImage})` }}
      >
        <h2 className="text-xl font-rancho text-center text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
