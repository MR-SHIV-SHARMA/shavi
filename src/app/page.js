import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col min-h-[90vh] justify-between">
          {/* Hero Section */}
          <main className="flex flex-col items-center text-center gap-10 mb-24">
            <div className="max-w-4xl space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Transform Your Digital Presence
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Empower your business with cutting-edge digital solutions
                tailored to your unique needs. Start your transformation journey
                today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <a
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-200 bg-blue-600 rounded-xl group hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
                href="/projects"
              >
                <span className="relative text-lg">Explore Tools</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                className="relative inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-200 border-2 border-blue-600 rounded-xl hover:bg-blue-50/50 dark:hover:bg-gray-800 group"
                href="/documentation"
              >
                <span className="relative text-lg text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  Documentation
                </span>
              </a>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
              {["Cloud Integration", "AI Solutions", "Analytics Dashboard"].map(
                (feature) => (
                  <div
                    key={feature}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                      {feature}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                )
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
