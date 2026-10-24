export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pham Le Quoc Phi",
    jobTitle: "Software Developer",
    url: "https://phamlequocphi.is-a.dev",
    sameAs: [
      "https://github.com/phamlequocphi-1609z",
      "https://www.linkedin.com/in/pham-le-quoc-phi/",
    ],
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
