// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Image from "next/image";

export const metadata = {
  title: "Contact Support | Get Instant Help",
  description:
    "Reach our team 24/7 through multiple channels - email, chat, or visit our offices worldwide",
  keywords:
    "contact support, customer service, help center, technical assistance",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add submission logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Support",
          description: metadata.description,
          url: "https://yourdomain.com/contact",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer service",
              availableLanguage: "English",
            },
          ],
        })}
      </script>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-800/20 dark:to-purple-800/20 -skew-y-3" />
        <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
          We're Here to Help
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative">
          Get instant support through our 24/7 channels or visit one of our
          global offices
        </p>
      </motion.section>

      {/* Contact Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 w-full"
      >
        {[
          {
            title: "Global Offices",
            content: "New York • London • Singapore",
            icon: "📍",
            extra: "Mon-Fri: 9AM - 7PM Local Time",
          },
          {
            title: "Live Chat",
            content: "Start Instant Chat",
            icon: "💬",
            extra: "Available 24/7",
          },
          {
            title: "Emergency Support",
            content: "+1 (555) 123-4567",
            icon: "🚨",
            extra: "24/7 Critical Issue Line",
          },
          {
            title: "Social Media",
            content: "@shavi_support",
            icon: "🌐",
            extra: "Twitter/X • LinkedIn • Facebook",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all w-full"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
            <p className="mt-3 text-sm text-blue-600 dark:text-blue-400">
              {item.extra}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-blue-50 dark:bg-gray-800 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Outstanding support team! Resolved our issue within minutes of contacting them.",
                author: "Sarah Johnson, CTO",
              },
              {
                quote:
                  "The 24/7 chat support has been a game-changer for our global operations.",
                author: "Michael Chen, CEO",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md"
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold dark:text-white">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ + Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* FAQ */}
        <motion.div
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          className="space-y-6 w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-white">
            Common Questions
          </h2>
          {[
            {
              question: "How quickly can I expect a response?",
              answer: "Typically within 1 business hour for premium support",
            },
            {
              question: "Do you offer 24/7 support?",
              answer: "Yes, our critical issue line is always available",
            },
          ].map((faq, index) => (
            <motion.div
              key={faq.question}
              whileHover={{ x: 5 }}
              className="border-b pb-4"
            >
              <h3 className="text-lg font-semibold dark:text-white">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Contact Form */}
        <motion.form
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full"
        >
          <div>
            <label className="block text-sm font-medium dark:text-gray-300 mb-2">
              Query Type
            </label>
            <select
              {...register("queryType", { required: true })}
              className="w-full rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">Select Inquiry Type</option>
              <option value="Technical">Technical Support</option>
              <option value="Sales">Sales Inquiry</option>
              <option value="Billing">Billing Question</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="w-full rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </div>
            <div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="w-full rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Valid email required
                </span>
              )}
            </div>
          </div>

          <div>
            <textarea
              {...register("message", { required: true })}
              rows="5"
              placeholder="How can we help you?"
              className="w-full rounded-lg border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">Message required</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
