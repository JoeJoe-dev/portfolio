import React, { useState, useEffect, useRef} from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
      
    useEffect(() => {
      const observer = new IntersectionObserver(
       ([entry]) => {
              setIsVisible(entry.isIntersecting);
            },
            {
              threshold: 0.2, // Trigger when 20% of the section is visible
              rootMargin: "0px 0px -50px 0px"
            }
          );
      
          if (sectionRef.current) {
            observer.observe(sectionRef.current);
          }
      
          return () => {
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          };
        }, []);

  return (
    <section 
    ref={sectionRef}
    className="bg-[#D5D5D5] py-20 px-8 font-sans" id="contact">

        <style>
      {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(30px);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes scaleOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-out-down {
          animation: fadeOutDown 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-out {
          animation: scaleOut 0.6s ease-out forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 1.2s; }
        
        .hidden-initially {
          opacity: 0;
        }
      `}
    </style>


      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className={`flex justify-center mb-8 ${
          isVisible ? 'animate-scale-in stagger-1' : 'animate-scale-out stagger-1'
        }`}>
          <div className="border-4 border-gray-600 px-20 py-4 ">
            <h2 className="text-2xl font-bold tracking-[0.3em] text-gray-700">
              CONTACT
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className={`text-center text-sm text-black leading-relaxed 
        mb-8 max-w-xl mx-auto ${
          isVisible ? 'animate-scale-in stagger-1' : 'animate-scale-out stagger-1'
        }`}>
          Reach out to discuss a potential hire or a new website project. Let’s create a digital home that works for you
        </p>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center mb-12">
          <div className="w-16 h-[2px] bg-black"></div>
          <div className="mx-3">
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="black" />
              <path d="M10 10 L20 0 L30 10 L20 20 Z" fill="black" />
            </svg>
          </div>
          <div className="w-16 h-[2px] bg-black"></div>
        </div>

        {/* Contact Form */}
        <div className={`space-y-6 text-black
          ${isVisible ? 'animate-fade-in-up stagger-2' : 
          'animate-fade-out-down stagger-2'}`}>
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-2 py-3 text-sm placeholder-gray-600 
              focus:outline-none focus:border-gray-700 transition-colors mb-4"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-2 py-3 text-sm 
              placeholder-gray-600 focus:outline-none focus:border-gray-700 transition-colors mb-4"
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-2 py-3 text-sm 
              placeholder-gray-600 focus:outline-none focus:border-gray-700 transition-colors mb-4"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-transparent border-b-2 border-l-2 border-black px-3 py-3 text-sm 
              placeholder-gray-600 focus:outline-none focus:border-gray-700 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-black"></div>
              <button
                onClick={handleSubmit}
                className="text-black text-sm font-bold tracking-widest hover:opacity-70 
                transition-opacity px-4 cursor-pointer"
              >
                SUBMIT
              </button>
              <div className="w-12 h-[2px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
