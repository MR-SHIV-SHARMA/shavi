This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

shavi/
├── package.json
├── next.config.js
├── README.md
└── src/
├── app/
│ ├── layout.js // ग्लोबल लेआउट (साझा Navbar, Footer आदि)
│ ├── page.js // डिफ़ॉल्ट होम पेज (यदि ज़रूरत हो)
│ ├── api/ // API रूट्स
│ │ ├── fileConversion/
│ │ │ ├── route.js // HTTP मेथड हैंडलिंग
│ │ │ ├── controller.js // बिज़नेस लॉजिक & इनपुट वैलिडेशन
│ │ │ ├── service.js // मुख्य प्रोसेसिंग लॉजिक
│ │ │ ├── utils.js // सहायक फ़ंक्शंस
│ │ │ ├── config.js // कॉन्फ़िगरेशन सेटिंग्स
│ │ │ ├── validations.js // (ऐच्छिक) वैलिडेशन लॉजिक
│ │ │ └── middleware.js // (ऐच्छिक) मिडलवेयर (ऑथेंटिकेशन, लॉगिंग आदि)
│ │ ├── textSummarizer/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── documentTranslator/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── pdfConverter/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── audioTranscription/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── videoSubtitleGenerator/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── dataFormatConverter/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── codeFormatter/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ ├── ebookConverter/
│ │ │ ├── route.js
│ │ │ ├── controller.js
│ │ │ ├── service.js
│ │ │ ├── utils.js
│ │ │ ├── config.js
│ │ │ ├── validations.js
│ │ │ └── middleware.js
│ │ └── imageCompressor/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ └── projects/ // सभी प्रोजेक्ट्स / टूल्स के लिए रूट्स
│ ├── imageBackgroundRemover/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js // कस्टम लेआउट (यदि आवश्यक हो)
│ │ ├── page.js // मुख्य/होम पेज
│ │ ├── about.js // About पेज
│ │ ├── features.js // Features पेज
│ │ ├── faq.js // FAQ पेज
│ │ └── contact.js // Contact पेज
│ ├── textSummarizer/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── documentTranslator/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── pdfConverter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── audioTranscription/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── videoSubtitleGenerator/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── dataFormatConverter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── codeFormatter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ ├── ebookConverter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ ├── page.js
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── faq.js
│ │ └── contact.js
│ └── imageCompressor/
│ ├── components/
│ │ ├── CustomNavbar.js
│ │ ├── CustomFooter.js
│ │ └── AboutButton.js
│ ├── layout.js
│ ├── page.js
│ ├── about.js
│ ├── features.js
│ ├── faq.js
│ └── contact.js
├── components/ // ग्लोबल साझा UI कम्पोनेंट्स (जैसे सामान्य Navbar, Footer, आदि)
│ ├── Navbar.js  
 │ ├── Footer.js  
 │ └── ...  
 └── styles/
└── globals.css // ग्लोबल CSS फाइल y hi thik hi thik hai




"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export const metadata = {
  title: "Contact Us | Get in Touch",
  description: "Reach out to our team for support, partnerships, or inquiries",
  keywords: "contact, support, inquiry, customer service",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          description: metadata.description,
          url: "https://yourdomain.com/contact",
        })}
      </script>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We're here to help and answer any questions you might have
        </p>
      </motion.section>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        {[
          {
            title: "Email Support",
            content: "support@shavi.com",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
              </svg>
            ),
          },
          {
            title: "Phone",
            content: "+1 (555) 123-4567",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 16.42v3.536a1 1 0 01-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 015.044 3H8.58a.5.5 0 01.498.45c.023.23.044.413.064.552.13.826.381 1.84.782 2.75a.5.5 0 01-.14.568l-2.008 1.917a14.93 14.93 0 007.012 7.013l1.917-2.009a.5.5 0 01.568-.14c.91.4 1.924.65 2.75.782.139.02.322.042.55.064a.5.5 0 01.449.498z" />
              </svg>
            ),
          },
          {
            title: "Social Media",
            content: "@shavi_tech",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Valid email is required
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              {...register("subject", { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">Subject is required</span>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>
    </div>
  );
}
