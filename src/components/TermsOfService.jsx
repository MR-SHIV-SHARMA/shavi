"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { format } from "date-fns";

export const metadata = {
  title: "Terms of Service - Usage Guidelines",
  description: "Legal terms governing the use of our platform and services",
};

export default function TermsOfService() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "responsibilities", title: "User Responsibilities" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "payments", title: "Payments & Subscriptions" },
    { id: "termination", title: "Termination" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "governance", title: "Governing Law" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Table of Contents */}
        <aside className="sticky top-20 hidden lg:block w-64 float-left mr-12">
          <nav className="border-l-2 border-gray-200 dark:border-gray-700 pl-6">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">
              Quick Navigation
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
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-12">
              Last Updated: {format(new Date(), "MMMM d, yyyy")}
            </p>

            <Section id="introduction" title="1. Introduction">
              <p className="text-gray-600 dark:text-gray-300">
                These Terms of Service govern your access to and use of our
                platform. By accessing or using our services, you agree to be
                bound by these terms.
              </p>
            </Section>

            <Section id="acceptance" title="2. Acceptance of Terms">
              <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                <li>You must be at least 18 years old to use our services</li>
                <li>By using the platform, you agree to these binding terms</li>
                <li>We reserve the right to modify these terms at any time</li>
              </ul>
            </Section>

            <Section id="responsibilities" title="3. User Responsibilities">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>When using our services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engage in illegal or unauthorized activities</li>
                  <li>Circumvent security measures or access controls</li>
                  <li>Upload malicious content or viruses</li>
                  <li>Impersonate other individuals or entities</li>
                </ul>
              </div>
            </Section>

            <Section
              id="intellectual-property"
              title="4. Intellectual Property"
            >
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  All platform content is protected by intellectual property
                  laws:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We retain all rights to platform content and branding</li>
                  <li>User-generated content remains your property</li>
                  <li>
                    Grant us a non-exclusive license to display user content
                  </li>
                </ul>
              </div>
            </Section>

            <Section id="payments" title="5. Payments & Subscriptions">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    All payments are non-refundable unless required by law
                  </li>
                  <li>Subscription auto-renew until canceled</li>
                  <li>30-day notice for price changes</li>
                </ul>
              </div>
            </Section>

            <Section id="termination" title="6. Termination">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We may suspend or terminate access for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violation of these terms</li>
                  <li>Fraudulent activity</li>
                  <li>Extended account inactivity</li>
                </ul>
              </div>
            </Section>

            <Section id="liability" title="7. Limitation of Liability">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Indirect or consequential damages</li>
                  <li>Service interruptions beyond our control</li>
                  <li>User-generated content accuracy</li>
                </ul>
              </div>
            </Section>

            <Section id="governance" title="8. Governing Law">
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Governed by laws of California, USA</li>
                  <li>Disputes resolved through arbitration</li>
                  <li>Venue for legal actions: Santa Clara County</li>
                </ul>
              </div>
            </Section>

            <Section id="changes" title="9. Policy Changes">
              <p className="text-gray-600 dark:text-gray-300">
                We will notify users of material changes through:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Email to registered users</li>
                <li>In-platform notifications</li>
                <li>Updated revision date at top of this document</li>
              </ul>
            </Section>

            <Section id="contact" title="10. Contact Us">
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>For questions about these terms:</p>
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline block"
                >
                  Contact Support Portal
                </Link>
                <p>Email: legal@shavi.com</p>
              </div>
            </Section>

            {/* Back to Top */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 text-center"
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
