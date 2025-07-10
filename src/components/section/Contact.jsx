import { useState } from "react";
import SectionWrapper from "../shared/SectionWrapper";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        setFormData({ name: "", email: "", title: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        setLoading(false);
        setError("❌ Failed to send message. Try again later.");
        console.error(err);
      });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="Let's build something amazing together — reach out today."
    >
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-full bg-[#1c1c28]/50 p-6 rounded-xl border border-[#2a2a3b] shadow-lg flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#7A5AF8]" />
                <span>aadarsh@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#7A5AF8]" />
                <span>+91 8210508119</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#7A5AF8] mt-1" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Social Icons with Tooltips */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4 flex-wrap">
              {[
                {
                  href: "https://github.com/2-0aadarsh",
                  icon: <FaGithub />,
                  label: "GitHub",
                  color: "#333333",
                },
                {
                  href: "https://www.linkedin.com/in/aadarsh-upadhyaybackenddeveloper/",
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  color: "#0077b5",
                },
                {
                  href: "https://X.com/Aadarsh08_",
                  icon: <FaTwitter />,
                  label: "Twitter",
                  color: "#1DA1F2",
                },
                {
                  href: "https://instagram.com/notsoaadarashh",
                  icon: <FaInstagram />,
                  label: "Instagram",
                  color: "#E1306C",
                },
              ].map(({ href, icon, label, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs px-2 py-1 rounded transition-transform duration-300 whitespace-nowrap z-10 shadow-lg">
                    {label}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110 hover:shadow-xl"
                    style={{ backgroundColor: color }}
                  >
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-full bg-[#1c1c28]/50 p-6 rounded-xl border border-[#2a2a3b] shadow-lg space-y-4"
        >
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white border border-transparent focus:border-[#7A5AF8] outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white border border-transparent focus:border-[#7A5AF8] outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Subject</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Subject of your message"
              className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white border border-transparent focus:border-[#7A5AF8] outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg bg-[#2a2a3b] text-white border border-transparent focus:border-[#7A5AF8] outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#7A5AF8] to-[#A162E8] hover:opacity-90 text-white font-medium py-3 rounded-lg transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-green-500 text-sm mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
