export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Background Remover Support
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with our expert support team for assistance with
            background removal, feature requests, or partnership opportunities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Support */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Email Support
            </h2>
            <a
              href="mailto:support@shavi.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-lg break-all"
            >
              support@shavi.com
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Typical response time:{" "}
              <span className="font-medium">Under 2 hours</span>
            </p>
          </div>

          {/* Support Form */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Live Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Submit your query through our dedicated support portal
            </p>
            <a
              href="/support-form"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Support Form
            </a>
          </div>

          {/* Social Media */}
          <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Social Media
            </h2>
            <div className="space-y-2">
              {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
                <a
                  key={platform}
                  href={`https://www.${platform.toLowerCase()}.com/shavi`}
                  className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  @shavi_{platform.toLowerCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Support Hours */}
        <div className="text-center bg-blue-50 dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">
            Support Availability
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
            <div className="text-right pr-4 border-r border-gray-200 dark:border-gray-700">
              <p className="font-medium">Weekdays</p>
              <p>9 AM - 6 PM (EST)</p>
            </div>
            <div className="text-left pl-4">
              <p className="font-medium">Weekends</p>
              <p>10 AM - 4 PM (EST)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
