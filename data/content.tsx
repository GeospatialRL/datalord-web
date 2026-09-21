const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom desktop, mobile and web solutions built to spec — with experienced developers who don't stop until you're satisfied.",
    href: "/services/software-development",
  },
  {
    number: "02",
    title: "Document Management System",
    description:
      "Multi-user DMS solutions that help businesses securely organise, store, and retrieve critical content at scale.",
    href: "/services/document-management",
  },
  {
    number: "03",
    title: "GIS & Remote Sensing",
    description:
      "Spatial data capture, analysis and visualisation — transforming geographic intelligence into real decisions.",
    href: "/services/gis-remote",
  },
  {
    number: "04",
    title: "Portal Management",
    description:
      "Integrated enterprise portals and court case management systems built on global best practices.",
    href: "/services/portal-management",
  },
  {
    number: "05",
    title: "Scanning Bureau",
    description:
      "Nigeria's premier document digitisation partner — over 3 million images scanned monthly with full quality assurance.",
    href: "/services/scanning-services",
  },
  {
    number: "06",
    title: "Digital Transformation",
    description:
      "We help organisations move from manual, outdated processes to modern automated systems — Cloud, AI, and IoT included.",
    href: "/services/digital-transformation",
  },
];

const stats = [
  { value: "15+", label: "Years of enterprise IT experience" },
  { value: "24/7", label: "Systems hosted, monitored & supported" },
  { value: "A+", label: "Client satisfaction rating" },
  { value: "END-TO-END", label: "From design to deployment to support" },
];

const whyPoints = [
  {
    title: "Custom solutions",
    description: "Every application is purpose-built around your specific needs",
  },
  {
    title: "Scalable technologies",
    description: "Solutions that will grow with your organisation over time",
  },
  {
    title: "Security-first approach",
    description: "Robust data protection and security at every stage of delivery",
  },
  {
    title: "Ongoing support & training",
    description: "Constant maintenance, updates and training",
  },
];

const projects = [
  {
    category: "JUDICIARY / LEGAL",
    title: "Electronic Docket System",
    description:
      "Designed and deployed an integrated electronic docket system, enabling digital management of court cases, filings, and proceedings, replacing paper-based processes with a secure, auditable workflow.",
    tags: ["Case Management", "E-Filing", "Workflow Automation"],
  },
  {
    category: "UNIVERSITY / ACADEMIC",
    title: "Cafe & Training Center Renovation",
    description:
      "Commissioned to lead the full renovation of a university cafe and training center, transforming an outdated space into a modern, flexible environment built for dining, collaboration, and learning.",
    tags: ["Interior Renovation", "Space Planning", "Facility Management"],
  },
  {
    category: "GOVERNMENT",
    title: "Document Digitisation Initiative",
    description:
      "Scanned, indexed, and archived millions of critical government records — converting physical archives into secure, searchable digital repositories for long-term accessibility.",
    tags: ["Indexing", "OCR", "Archiving"],
  },
];

const aboutInfo = [
  {
    label: "OFFICE LOCATION",
    content: <p>2 Wemi Akinsola Close, Allen Avenue, Ikeja, Lagos</p>,
  },
  {
    label: "CONTACT",
    content: (
      <>
        <p>info@datalordtech.com</p>
        <p>(+234) 903-6065-544, (+234) 901-2925-909</p>
      </>
    ),
  },
  {
    label: "EXPERTISE",
    content: (
      <p>
        Software Dev · Digital Transformation · GIS · Document Management ·
        Scanning Bureau · Portal Management
      </p>
    ),
  },
];

export { services, stats, whyPoints, projects, aboutInfo };