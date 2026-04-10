import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 90,
      easing: "ease-out-cubic",
      duration: 850,
    });
    setTimeout(() => AOS.refresh(), 0);
  }, []);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    if (!form.email.trim()) return "Please enter your email address.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please type your message.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setStatus("error");
      setFeedback(err);
      return;
    }

    try {
      setStatus("sending");
      setFeedback("Sending your message...");

      // ✅ Replace this with your real API call
      await new Promise((r) => setTimeout(r, 1200));
      // Example:
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      setStatus("success");
      setFeedback("Thanks! Your message has been sent. We’ll get back to you within 24 hours.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback("Sorry, something went wrong. Please try again in a moment.");
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 lg:py-20">
        <div className="mx-auto max-w-[980px] text-center">
          <p data-aos="fade-up" className="mb-2 text-xs font-semibold text-blue-600">
            Get in Touch
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-slate-900 sm:text-[40px]"
          >
            Have a Question <br className="hidden sm:block" />
            Send us a Message
          </h2>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 max-w-[980px]"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          <div className="grid gap-5 md:grid-cols-3">
            <Input name="name" placeholder="Name" value={form.name} onChange={onChange} />
            <Input name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
            <Input name="email" placeholder="Email" value={form.email} onChange={onChange} type="email" />
          </div>

          <div className="mt-5">
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="w-full resize-none rounded-xl bg-white/90 px-5 py-4 text-sm text-slate-700
                         shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                         ring-1 ring-slate-200/70
                         outline-none transition
                         focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          <div className="mt-7 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-10
                         text-sm font-semibold text-white
                         shadow-[0_12px_26px_rgba(37,99,235,0.25)]
                         transition hover:-translate-y-[1px]
                         hover:bg-blue-700
                         hover:shadow-[0_16px_34px_rgba(37,99,235,0.30)]
                         disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending..." : "Send Now"}
            </button>

            {/* Feedback message */}
            {feedback ? (
              <div
                aria-live="polite"
                className={[
                  "w-full max-w-[700px] rounded-xl px-4 py-3 text-center text-sm ring-1",
                  status === "success"
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                    : status === "error"
                    ? "bg-rose-50 text-rose-700 ring-rose-200"
                    : "bg-slate-50 text-slate-600 ring-slate-200",
                ].join(" ")}
              >
                {feedback}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className="h-11 w-full rounded-xl bg-white/90 px-5 text-sm text-slate-700
                 shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                 ring-1 ring-slate-200/70
                 outline-none transition
                 focus:ring-2 focus:ring-blue-500/40"
    />
  );
}