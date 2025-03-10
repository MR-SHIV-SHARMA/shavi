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

my-nextjs-project/
├── package.json
├── next.config.js
├── README.md
└── src/
├── app/
│ ├── layout.js // ग्लोबल लेआउट (साझा Navbar, Footer आदि)
│ ├── page.js // डिफ़ॉल्ट होम पेज (यदि ज़रूरत हो)
│ ├── api/ // API रूट्स
│ ├── fileConversion/
│ │ ├── route.js // HTTP मेथड हैंडलिंग
│ │ ├── controller.js // बिज़नेस लॉजिक और इनपुट वैलिडेशन
│ │ ├── service.js // मुख्य प्रोसेसिंग लॉजिक
│ │ ├── utils.js // सहायक फ़ंक्शंस
│ │ ├── config.js // कॉन्फ़िगरेशन सेटिंग्स
│ │ ├── validations.js // (ऐच्छिक) विशेष वैलिडेशन लॉजिक
│ │ └── middleware.js // (ऐच्छिक) मिडलवेयर कार्यक्षमता
│ ├── textSummarizer/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── documentTranslator/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── pdfConverter/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── audioTranscription/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── videoSubtitleGenerator/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── dataFormatConverter/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── codeFormatter/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ ├── ebookConverter/
│ │ ├── route.js
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── utils.js
│ │ ├── config.js
│ │ ├── validations.js
│ │ └── middleware.js
│ └── imageCompressor/
│ ├── route.js
│ ├── controller.js
│ ├── service.js
│ ├── utils.js
│ ├── config.js
│ ├── validations.js
│ └── middleware.js
│ └── projects/ // सभी प्रोजेक्ट्स / टूल्स के लिए रूट्स
│ ├── imageBackgroundRemover/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js // "About Us" बटन का कम्पोनेंट
│ │ ├── layout.js // वैकल्पिक: कस्टम लेआउट (यदि ग्लोबल से अलग चाहिए)
│ │ └── page.js // इमेज बैकग्राउंड रिमूवर का पेज
│ ├── textSummarizer/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // टेक्स्ट समरीज़र का पेज
│ ├── documentTranslator/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // डॉक्यूमेंट ट्रांसलेटर का पेज
│ ├── pdfConverter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // PDF कन्वर्टर का पेज
│ ├── audioTranscription/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // ऑडियो ट्रांसक्रिप्शन टूल का पेज
│ ├── videoSubtitleGenerator/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // वीडियो सबटाइटल जेनरेटर का पेज
│ ├── dataFormatConverter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // डेटा फॉर्मेट कन्वर्टर का पेज
│ ├── codeFormatter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // कोड फॉर्मेटर का पेज
│ ├── ebookConverter/
│ │ ├── components/
│ │ │ ├── CustomNavbar.js
│ │ │ ├── CustomFooter.js
│ │ │ └── AboutButton.js
│ │ ├── layout.js
│ │ └── page.js // ई-बुक कन्वर्टर का पेज
│ └── imageCompressor/
│ ├── components/
│ │ ├── CustomNavbar.js
│ │ ├── CustomFooter.js
│ │ └── AboutButton.js
│ ├── layout.js
│ └── page.js // इमेज कम्प्रेसर का पेज
├── components/ // ग्लोबल साझा UI कम्पोनेंट्स (जैसे सामान्य Navbar, Footer, आदि)
│ ├── Navbar.js  
 │ ├── Footer.js  
 │ └── ...  
 └── styles/
└── globals.css // ग्लोबल CSS फाइल
#   s h a v i  
 