import Documentation from "@/components/Documentation";
import { getDocumentationContent } from "@/lib/docs";

export async function generateMetadata() {
  return {
    title: "Product Documentation | Shavi",
    description: "Comprehensive guide to using our product effectively",
    keywords: "documentation, guide, user manual, product help",
    openGraph: {
      title: "Product Documentation | Shavi",
      description: "Comprehensive product documentation and user guide",
      images: [{ url: "/og-docs.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Product Documentation | Shavi",
      description: "Comprehensive product documentation and user guide",
      images: ["/og-docs.jpg"],
    },
  };
}

export default async function DocumentationPage() {
  const docsContent = await getDocumentationContent();

  return <Documentation content={docsContent} />;
}
