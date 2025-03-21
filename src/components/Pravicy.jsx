// app/privacy/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Your Data Security",
  description: "Learn how we protect and manage your personal information",
};

export default function PrivacyPolicy() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collected", title: "Information We Collect" },
    { id: "data-usage", title: "How We Use Your Information" },
    { id: "data-sharing", title: "Data Sharing & Third Parties" },
    { id: "security", title: "Security Measures" },
    { id: "user-rights", title: "User Rights & Controls" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "policy-changes", title: "Policy Updates" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Table of Contents */}
        <aside className="sticky top-20 hidden lg:block w-64 float-left mr-12">
          <nav className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">
              Contents
            </h2>
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="lg:pl-72">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold dark:text-white mb-8">
              Privacy Policy
            </h1>

            {/* Introduction */}
            <Section id="introduction" title="Introduction">
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to protecting your personal information and
                being transparent about what data we collect. This policy
                explains how we handle and protect your information when you use
                our services.
              </p>
            </Section>

            {/* Information Collected */}
            <Section id="information-collected" title="Information We Collect">
              <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>Personal identification (name, email, contact details)</li>
                <li>
                  Technical data (IP address, browser type, device information)
                </li>
                <li>
                  Usage data (pages visited, features used, session duration)
                </li>
                <li>Cookies and tracking technologies data</li>
              </ul>
            </Section>

            {/* Data Usage */}
            <Section id="data-usage" title="How We Use Your Information">
              <ul className="list-decimal pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>Service delivery and account management</li>
                <li>Product improvement and feature development</li>
                <li>Security monitoring and fraud prevention</li>
                <li>Personalized user experiences</li>
                <li>Legal compliance and regulatory requirements</li>
              </ul>
            </Section>

            {/* Data Sharing */}
            <Section id="data-sharing" title="Data Sharing & Third Parties">
              <p className="text-gray-600 dark:text-gray-300">
                We only share data with trusted third-party services essential
                for operations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  "Cloud Storage",
                  "Analytics",
                  "Payment Processing",
                  "Customer Support",
                ].map((service) => (
                  <div
                    key={service}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <h3 className="font-medium dark:text-white">{service}</h3>
                  </div>
                ))}
              </div>
            </Section>

            {/* Security */}
            <Section id="security" title="Security Measures">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We implement enterprise-grade security protocols including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption</li>
                  <li>Regular security audits</li>
                  <li>Two-factor authentication</li>
                  <li>Secure server infrastructure</li>
                </ul>
              </div>
            </Section>

            {/* User Rights */}
            <Section id="user-rights" title="User Rights & Controls">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data correction</li>
                  <li>Delete your account information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p>
                  Manage preferences through your account settings or contact
                  our support team.
                </p>
              </div>
            </Section>

            {/* Cookies */}
            <Section id="cookies" title="Cookies & Tracking">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We use cookies for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Authentication and sessions</li>
                  <li>Performance monitoring</li>
                  <li>Personalized content</li>
                </ul>
                <p>
                  Manage cookie preferences via browser settings or our cookie
                  consent banner.
                </p>
              </div>
            </Section>

            {/* Policy Changes */}
            <Section id="policy-changes" title="Policy Updates">
              <p className="text-gray-600 dark:text-gray-300">
                We may update this policy periodically. Significant changes will
                be notified via:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Email notifications to registered users</li>
                <li>In-app announcements</li>
                <li>Updated revision date at the bottom of this page</li>
              </ul>
            </Section>

            {/* Contact */}
            <Section id="contact" title="Contact Us">
              <p className="text-gray-600 dark:text-gray-300">
                For privacy-related inquiries or data requests:
              </p>
              <div className="mt-4 space-y-2">
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Contact Support Form
                </Link>
                <p className="text-gray-600 dark:text-gray-300">
                  Email: privacy@shavi.com
                </p>
              </div>
            </Section>

            {/* Back to Top */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12"
            >
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to Top
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// Reusable Section Component
function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="mb-12 scroll-mt-24"
    >
      <h2 className="text-2xl font-semibold dark:text-white mb-4">{title}</h2>
      {children}
    </motion.section>
  );
}
