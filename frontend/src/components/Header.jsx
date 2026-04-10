import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3BottomRight, HiXMark} from "react-icons/hi2";
import logo from "../assets/luisant.png";

/* ---------------- Desktop Nav Item ---------------- */
const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      [
        "text-[13.5px] font-medium tracking-[-0.01em] transition-colors",
        isActive
          ? "text-blue-600"
          : "text-slate-700 hover:text-slate-950",
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

/* ---------------- Mobile Nav Item ---------------- */
const MobileLink = ({ to, onClick, children }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      [
        "rounded-xl px-3 py-2.5 text-[14px] transition block",
        isActive
          ? "bg-blue-50 text-blue-700 font-semibold"
          : "text-slate-700 hover:bg-slate-50 hover:text-slate-950 font-medium",
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close menu on ESC */
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full font-["Poppins"]'>
      {/* Top Bar */}
      <div className="border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5">
          <img
  src={logo}
  alt="Chat Nex"
  className="h-10 w-30 object-cover"
/>
           
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/pricing">Pricing</NavItem>
            
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <NavLink
              to="/contact"
              className="text-[13.5px] font-semibold text-slate-800 hover:text-slate-950"
            >
              Try Free Trial
            </NavLink>

            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_18px_55px_rgba(37,99,235,.22)] transition hover:bg-blue-700"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-2xl ring-1 ring-slate-200 bg-white/70 p-2.5 text-slate-800 shadow-sm backdrop-blur hover:bg-white transition"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <HiXMark className="text-[22px]" />
            ) : (
              <HiBars3BottomRight className="text-[22px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 right-0 top-[68px] border-t border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <div className="mx-auto max-w-6xl px-4 py-5 grid gap-2">

              <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
              <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
              <MobileLink to="/services" onClick={() => setOpen(false)}>Services</MobileLink>
              
              <MobileLink to="/pricing" onClick={() => setOpen(false)}>Pricing</MobileLink>

              <div className="mt-4 grid gap-3">
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-[14px] font-semibold text-white shadow-[0_18px_55px_rgba(37,99,235,.22)] hover:bg-blue-700 transition"
                >
                  Contact Us
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-[14px] font-semibold text-slate-900 ring-1 ring-slate-200/70 hover:bg-slate-50 transition"
                >
                  Try Free Trial
                </NavLink>
              </div>

              <div className="mt-4 text-center text-[12px] font-medium text-slate-500">
                Secure • Fast • Modern UI
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
