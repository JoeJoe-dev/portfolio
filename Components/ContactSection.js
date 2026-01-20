"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // CHANGED: These keys now match your EmailJS template {{name}}, {{message}}, etc.
    const templateParams = {
      name: formData.name, // Matches {{name}}
      email: formData.email, // Matches {{email}}
      phone: formData.phone, // Matches {{phone}}
      message: formData.message, // Matches {{message}}
    };

    console.log("Key Check:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#D5D5D5] py-24 px-8 font-sans overflow-hidden"
      id="contact"
    >
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-up { 
          animation: ${
            isVisible
              ? "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : "none"
          };
          opacity: 0;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
      `}</style>

      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 animate-up stagger-1">
          <div className="inline-block border-4 border-black px-12 py-4 mb-6">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-black">
              CONTACT
            </h2>
          </div>
          <p className="text-sm text-black leading-relaxed max-w-lg mx-auto">
            Reach out to discuss a project or hire. Let’s build something
            amazing together.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center mb-16 animate-up stagger-2">
          <div className="w-16 h-[2px] bg-black"></div>
          <div className="mx-4 flex gap-1">
            <svg width="24" height="16" viewBox="0 0 30 20" fill="black">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" />
              <path d="M10 10 L20 0 L30 10 L20 20 Z" />
            </svg>
          </div>
          <div className="w-16 h-[2px] bg-black"></div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 animate-up stagger-2 text-black"
        >
          <div className="grid grid-cols-1 gap-8">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all"
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:bg-white/10 transition-all text-black resize-none"
            />
          </div>

          <div className="flex justify-center pt-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-[2px] bg-black"></div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-black text-sm font-black tracking-[0.2em] hover:opacity-60 transition-opacity cursor-pointer uppercase disabled:opacity-30"
              >
                {isSubmitting ? "SENDING..." : "SUBMIT MESSAGE"}
              </button>
              <div className="w-12 h-[2px] bg-black"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
