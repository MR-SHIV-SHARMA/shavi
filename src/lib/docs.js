// lib/docs.js
export async function getDocumentationContent() {
  return {
    title: "Product Documentation",
    sections: [
      {
        id: "getting-started",
        title: "Getting Started",
        content: "Welcome to our product documentation...",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "intro",
        title: "Introduction",
        content:
          "Welcome to the documentation. This guide will help you get started.",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "installation",
        title: "Installation",
        content: "Follow these steps to install the project dependencies.",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "usage",
        title: "Usage",
        content: "Learn how to use the key features of our system.",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "api",
        title: "API Reference",
        content: "Detailed information about our API endpoints and usage.",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "faq",
        title: "FAQ",
        content: "Common questions and troubleshooting tips.",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "support",
        title: "Support",
        content: "Need help? Contact our support team for assistance.",
        image: "/docs/getting-started.jpg",
      },
      {
        id: "changelog",
        title: "Changelog",
        content: "Stay updated with the latest changes and new features.",
        image: "/docs/getting-started.jpg",
      },
    ],
  };
}
