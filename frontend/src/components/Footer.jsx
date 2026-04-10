import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Send
} from "lucide-react";

import logo from "../assets/luisant.png";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="ChatNex Logo" className="w-25 h-10" />

          </div>
          <p className="text-sm leading-6 mb-4">
            We’re passionate about making conversations smoother and smarter
            with AI technology.
          </p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500 transition" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition" />
          </div>
        </div>

        {/* Navigation */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +61 3 8376 6284
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@chatnex.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              551 Swanston Street, Melbourne
              <br /> Victoria 3053 Australia
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-white font-semibold mb-4">
            Newsletter Signup
          </h3>

          <div className="flex bg-gray-900 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent px-4 py-3 text-sm outline-none w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 flex items-center justify-center transition">
              <Send size={18} className="text-white" />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 text-xs">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <span className="underline cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
        Copyright © {year} ChatNex. All Rights Reserved.
      </div>
    </footer>
  );
}
