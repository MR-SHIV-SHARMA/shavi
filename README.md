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
├── public/
│ bg-removal-example.png
│ file.svg
│ globe.svg
│ next.svg
│ pexels-blue-record-766997868-19926864.jpg
│ pexels-lyulog-5038403.jpg
│ pexels-tizzy-30229536.jpg
│ shavi-logo.jpg
│ vercel.svg
│ window.svg
│
├───docs
│ getting-started.jpg
│
└───temp
└── src/
├───app
│ │ favicon.ico
│ │ globals.css
│ │ layout.js
│ │ page.js
│ │
│ ├───about
│ │ page.jsx
│ │
│ ├───api
│ │ ├───audioTranscription
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───codeFormatter
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───dataFormatConverter
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───documentTranslator
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───ebookConverter
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───fileConversion
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───imageCompressor
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───pdfConverter
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ ├───textSummarizer
│ │ │ config.js
│ │ │ controller.js
│ │ │ middleware.js
│ │ │ route.js
│ │ │ service.js
│ │ │ utils.js
│ │ │ validations.js
│ │ │
│ │ └───videoSubtitleGenerator
│ │ config.js
│ │ controller.js
│ │ middleware.js
│ │ route.js
│ │ service.js
│ │ utils.js
│ │ validations.js
│ │
│ ├───contact
│ │ page.jsx
│ │
│ ├───documentation
│ │ page.jsx
│ │
│ ├───faq
│ │ page.jsx
│ │
│ ├───features
│ │ page.jsx
│ │
│ └───projects
│ │ page.jsx
│ │
│ ├───audioTranscription
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───codeFormatter
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───dataFormatConverter
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───documentTranslator
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───ebookConverter
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───imageBackgroundRemover
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───imageCompressor
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───pdfConverter
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ ├───textSummarizer
│ │ │ layout.js
│ │ │ page.js
│ │ │
│ │ ├───about
│ │ │ page.jsx
│ │ │
│ │ ├───components
│ │ │ About.jsx
│ │ │ Contact.jsx
│ │ │ CustomFooter.jsx
│ │ │ CustomNavbar.jsx
│ │ │ Faq.jsx
│ │ │ Features.jsx
│ │ │
│ │ ├───contact
│ │ │ page.jsx
│ │ │
│ │ ├───faq
│ │ │ page.jsx
│ │ │
│ │ └───features
│ │ page.jsx
│ │
│ └───videoSubtitleGenerator
│ │ layout.js
│ │ page.js
│ │
│ ├───about
│ │ page.jsx
│ │
│ ├───components
│ │ About.jsx
│ │ Contact.jsx
│ │ CustomFooter.jsx
│ │ CustomNavbar.jsx
│ │ Faq.jsx
│ │ Features.jsx
│ │
│ ├───contact
│ │ page.jsx
│ │
│ ├───faq
│ │ page.jsx
│ │
│ └───features
│ page.jsx
│
├───components
│ About.jsx
│ Contact.jsx
│ Documentation.jsx
│ Faq.jsx
│ Features.jsx
│ Footer.jsx
│ LayoutWrapper.jsx
│ Navbar.jsx
│ Projects.jsx
│
└───lib
docs.js
