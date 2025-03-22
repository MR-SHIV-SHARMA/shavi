export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Our AI Background Remover
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your images instantly with cutting-edge AI technology -
            remove backgrounds in seconds with pixel-perfect precision
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "AI-Powered Precision",
              icon: "🤖",
              content:
                "Advanced neural networks deliver professional-grade background removal",
            },
            {
              title: "Instant Processing",
              icon: "⚡",
              content: "Get results in 2-3 seconds without quality loss",
            },
            {
              title: "Free & Accessible",
              icon: "🎁",
              content:
                "Completely free online tool with no registration required",
            },
            {
              title: "Multi-Format Support",
              icon: "🖼️",
              content: "Works with JPG, PNG, WEBP formats up to 10MB",
            },
            {
              title: "Privacy First",
              icon: "🔒",
              content: "Automatic file deletion after processing completes",
            },
            {
              title: "High-Quality Results",
              icon: "💎",
              content:
                "Crisp edges and transparent backgrounds ready for professional use",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.content}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Upload",
                text: "Drag & drop your image or click to browse",
              },
              {
                step: "2. AI Processing",
                text: "Our neural network analyzes and removes background",
              },
              {
                step: "3. Download",
                text: "Get your image with transparent background instantly",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-6 dark:text-white">
            Trusted by 1M+ Users Worldwide
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-75">
            {[
              "Photographers",
              "E-commerce Sellers",
              "Graphic Designers",
              "Social Media Managers",
            ].map((role, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
              >
                <span>✔️</span> {role}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/projects/image-background-remover"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Free Background Remover →
          </a>
        </div>
      </div>
    </div>
  );
}
