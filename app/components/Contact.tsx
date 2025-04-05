"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, } from "lucide-react";

export default function Contact() {
  // const [hovered, setHovered] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseMessage(data.message);
      
      if (data.success) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch {
      setResponseMessage("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-black text-white px-6 md:px-12 py-16"
    >
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <button className="text-sm tracking-wide uppercase opacity-60 hover:opacity-100">
          Close
        </button>
        <span className="text-sm tracking-wide opacity-60">SEAL+CO</span>
      </div>

      {/* Main Content - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.h2
          className="text-[3rem] md:text-[6rem] leading-none font-serif font-bold text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          LET&apos;S <br className="hidden md:block" /> GET IN <br className="hidden md:block" /> TOUCH
        </motion.h2>


        {/* Contact Form */}
        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="FULL NAME"
            className="bg-transparent border-b border-white focus:ring-0 placeholder-white text-white w-full"
            required
          />
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL"
              className="bg-transparent border-b border-white focus:ring-0 placeholder-white text-white w-full"
              required
            />
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="PHONE"
              className="bg-transparent border-b border-white focus:ring-0 placeholder-white text-white w-full"
            />
          </div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE"
            rows={3}
            className="bg-transparent border-b border-white focus:ring-0 placeholder-white text-white"
            required
          />
          <button
            type="submit"
            className="mt-6 flex items-center text-white hover:scale-105 transition-transform"
            disabled={loading}
          >
            {loading ? "Sending..." : <ArrowRight size={32} />}
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-400">{responseMessage}</p>
        )}
      </div>

      {/* Social Media & Contact Info (Unchanged) */}
      <div className="flex flex-row space-x-6 mt-4 items-center">
          <a
            href="https://github.com/aariz4ever"
            target="_blank"
            rel="noopener noreferrer"
            // onMouseEnter={() => setHovered("GitHub")}
            // onMouseLeave={() => setHovered("")}
          >
            <Github size={28} className="hover:text-[#8900f2] transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-aariz-0b71a7275/"
            target="_blank"
            rel="noopener noreferrer"
            // onMouseEnter={() => setHovered("LinkedIn")}
            // onMouseLeave={() => setHovered("")}
          >
            <Linkedin size={28} className="hover:text-[#8900f2] transition-colors" />
          </a>
          {/* <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered("Twitter")}
            onMouseLeave={() => setHovered("")}
          >
            <Twitter size={28} className="hover:text-[#8900f2] transition-colors" />
          </a> */}
          {/* <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered("Instagram")}
            onMouseLeave={() => setHovered("")}
          >
            <Instagram size={28} className="hover:text-[#8900f2] transition-colors" />
          </a> */}
        </div>
    </section>
  );
}
