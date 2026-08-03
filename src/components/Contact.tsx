import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f7eb7988-f0c8-4753-a4a4-1b498b304687",
          name,
          email,
          subject,
          message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex justify-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  Let's Connect
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in new opportunities and interesting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        Email
                      </h4>
                      <a href="mailto:ramanjanmanchikatla@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        ramanjanmanchikatla@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Phone
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        Phone
                      </h4>
                      <a href="tel:+919398879251" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +91 93988 79251
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <MapPin
                        className="text-blue-600 dark:text-blue-400"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-white">
                        Location
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex justify-center">
              <form onSubmit={handleSubmit} className="w-full max-w-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl shadow-2xl space-y-5 border border-blue-100 dark:border-gray-700">
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Contact Me</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Feel free to reach out for opportunities, collaborations, or just to say hi!</p>
                </div>

                {/* Success Message */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm">
                    <CheckCircle size={18} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
                    <XCircle size={18} />
                    <span>Something went wrong. Please try again or email me directly.</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold text-base shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
