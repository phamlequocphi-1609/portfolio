import {
  EMAIL_ADDRESS,
  GITHUB_URL,
  LINKED_URL,
  LOCATION_TEXT,
} from "@/constants/contact";
import { siteUrl } from "@/constants/site-url";

export function JsonLd() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const profilePageId = `${siteUrl}/#profilepage`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Website",
        "@id": websiteId,
        url: siteUrl,
        name: "Pham Le Quoc Phi Portfolio",
        description:
          "Portfolio of Pham Le Quoc Phi - Software Developer specializing in modern web applications, creative UI/UX, and high-performance solutions.",
        publisher: {
          "@id": personId,
        },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteUrl,
        name: "Pham Le Quoc Phi - Software Developer Portfolio",
        isPartOf: {
          "@id": websiteId,
        },
        mainEntity: {
          "@id": personId,
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Pham Le Quoc Phi",
        alternateName: [
          "Phạm Lê Quốc Phi",
          "Quốc Phi",
          "Quoc Phi",
          "Phi Phạm",
          "Phi Pham",
        ],
        jobTitle: "Software Developer",
        description:
          "Software Developer specializing in modern web applications, creative UI/UX, and high-performance solutions.",
        url: siteUrl,
        image: `${siteUrl}/avt_phi.jpg`,
        email: `mailto:${EMAIL_ADDRESS}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ho Chi Minh City",
          addressCountry: "VN",
          description: LOCATION_TEXT,
        },
        sameAs: [GITHUB_URL, LINKED_URL],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "REST API",
          "Tailwind CSS",
          "Framer Motion",
          "Vite",
          "Git",
          "GitHub",
          "CI/CD",
          "Zustand",
          "Redux",
          "NestJs",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
