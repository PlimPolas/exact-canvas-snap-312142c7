/**
 * CLINIC CONTENT SOURCE OF TRUTH
 * Coastal Smiles Newport Beach — Dr. Daniele Green, DDS
 */

import infra1 from "@/assets/infra-1.jpg";
import infra2 from "@/assets/infra-2.jpg";
import infra3 from "@/assets/infra-3.jpg";
import infra4 from "@/assets/infra-4.jpg";
import case1Before from "@/assets/case1-an.jpg.asset.json";
import case1After from "@/assets/case1-dp.jpg.asset.json";
import case2Before from "@/assets/case2-an.jpg.asset.json";
import case2After from "@/assets/case2-dp.jpg.asset.json";
import case3Before from "@/assets/case3-an.jpg.asset.json";
import case3After from "@/assets/case3-dp.jpg.asset.json";
import case4Before from "@/assets/case4-an.jpg.asset.json";
import case4After from "@/assets/case4-dp.jpg.asset.json";
import heroPoster from "@/assets/hero-coastal.jpg";
import drPortrait from "@/assets/dr-portrait.jpg";

export const clinic = {
  name: "Coastal Smiles Newport Beach",
  shortName: "Coastal Smiles",
  tagline: "Personalized concierge cosmetic dentistry",
  city: "Newport Beach, California",
  address: "1401 Avocado Ave, Suite 502 · Newport Beach, CA 92660",
  streetAddress: "1401 Avocado Ave, Suite 502",
  locality: "Newport Beach",
  region: "CA",
  postalCode: "92660",
  phoneLabel: "(949) 640-9554",
  phoneHref: "tel:+19496409554",
  email: "info@coastalsmilesdentistry.com",
  emailHref: "mailto:info@coastalsmilesdentistry.com",
  instagramClinic: "@coastal_smiles_newport",
  instagramClinicUrl: "https://instagram.com/coastal_smiles_newport",
  instagramDoctor: "@drdanielegreen",
  instagramDoctorUrl: "https://instagram.com/drdanielegreen",
  mapsUrl:
    "https://maps.google.com/?q=1401+Avocado+Ave+Suite+502,+Newport+Beach,+CA+92660",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=1401+Avocado+Ave+Suite+502,+Newport+Beach,+CA+92660&output=embed",
  dentist: "Dr. Daniele Green, DDS",
  dentistRole: "Founder & Owner · Cosmetic and General Dentist",
  hours: "Mon–Thu appointments · Friday mornings",
  award: "Best Cosmetic Dentist · Best of the City 2025",
};

export const officeHours = [
  { day: "Monday", time: "8:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "8:00 AM – 12:00 PM" },
];

export const heroContent = {
  poster: heroPoster,
  badge: "Award-Winning Cosmetic Dentistry in Newport Beach",
  title: "A Smile Designed",
  titleAccent: "Around You.",
  subtitle:
    "Personalized concierge dentistry by Dr. Daniele Green, combining advanced digital smile design, artistry, and comprehensive care to create naturally beautiful results.",
  primaryCta: "Book Your Smile Consultation",
  secondaryCta: "View Smile Transformations",
  trustLine: "Best Cosmetic Dentist · Best of the City 2025",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Dr. Green", href: "#about" },
  { label: "The Studio", href: "#studio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const partners = [
  "Best Cosmetic Dentist · Best of the City 2025",
  "Kois Center Advanced Training",
  "DDS · Loma Linda University",
  "Digital Smile Design",
  "Invisalign",
  "4.9-Star Google Rating",
  "Cosmetic & General Dentistry",
  "Newport Beach, California",
];

export const stats = [
  { value: "4.9", label: "Google Rating" },
  { value: "10+", label: "Years in Cosmetic Dentistry" },
  { value: "2025", label: "Best of the City Award" },
  { value: "1:1", label: "Concierge-Level Care" },
];

export type TreatmentCategory =
  | "cosmetic"
  | "orthodontics"
  | "restorative"
  | "general";

export const treatmentFilters: { label: string; value: TreatmentCategory | "all" }[] = [
  { label: "All Services", value: "all" },
  { label: "Cosmetic", value: "cosmetic" },
  { label: "Orthodontics", value: "orthodontics" },
  { label: "Restorative", value: "restorative" },
  { label: "General", value: "general" },
];

export const treatments = [
  {
    category: "cosmetic" as TreatmentCategory,
    tag: "Signature Service",
    icon: "sparkles",
    title: "Porcelain Veneers",
    text: "Hand-finished porcelain designed around your facial structure, lips and gum line. Natural translucency, natural proportions, and a result that still looks like you.",
    footnote: "Facially driven design",
    cta: "Book Consultation",
    featured: true,
  },
  {
    category: "cosmetic" as TreatmentCategory,
    tag: "Complete Aesthetics",
    icon: "tooth",
    title: "Smile Makeovers",
    text: "A comprehensive aesthetic plan that may combine veneers, whitening, bonding and gum contouring — previewed digitally before any treatment begins.",
    footnote: "Digital smile preview",
    cta: "Learn More",
    featured: false,
  },
  {
    category: "orthodontics" as TreatmentCategory,
    tag: "Clear Aligners",
    icon: "refresh",
    title: "Invisalign",
    text: "Discreet, removable aligners that guide your teeth into balanced alignment, often as the foundation for a longer-term cosmetic plan.",
    footnote: "Planned in 3D",
    cta: "Learn More",
    featured: false,
  },
  {
    category: "cosmetic" as TreatmentCategory,
    tag: "Brightening",
    icon: "face",
    title: "Professional Teeth Whitening",
    text: "Supervised in-office and take-home whitening calibrated to your enamel and sensitivity, for a brighter tone that still reads as natural.",
    footnote: "Shade matched to your face",
    cta: "Learn More",
    featured: false,
  },
  {
    category: "restorative" as TreatmentCategory,
    tag: "Comprehensive Care",
    icon: "microscope",
    title: "Full Mouth Reconstruction",
    text: "Rebuilding function, bite and aesthetics together — porcelain crowns and bridges, implant restorations and TMJ/TMD care, sequenced into one clear plan.",
    footnote: "Function and aesthetics together",
    cta: "Learn More",
    featured: false,
  },
  {
    category: "general" as TreatmentCategory,
    tag: "Everyday Dentistry",
    icon: "tooth",
    title: "General Dentistry & Bonding",
    text: "Dental bonding, gum contouring, exams, cleanings and preventive care delivered with the same precision and attention as our cosmetic work.",
    footnote: "Same standard of care",
    cta: "Learn More",
    featured: false,
  },
];

export type SmileCase = {
  caseNumber: string;
  beforeImage: string;
  afterImage: string;
};

export const smileCases: SmileCase[] = [
  { caseNumber: "01", beforeImage: case1Before.url, afterImage: case1After.url },
  { caseNumber: "02", beforeImage: case2Before.url, afterImage: case2After.url },
  { caseNumber: "03", beforeImage: case3Before.url, afterImage: case3After.url },
  { caseNumber: "04", beforeImage: case4Before.url, afterImage: case4After.url },
];

export const about = {
  badge: "About",
  title: "Meet Dr. Daniele Green",
  portrait: drPortrait,
  paragraphs: [
    "Dr. Daniele Green is the founder and owner of Coastal Smiles Newport Beach, a cosmetic and general dentist with advanced training in aesthetic and reconstructive dentistry.",
    "Born and raised in Rio Grande do Sul, Brazil, she spent the first twenty-one years of her life there before moving to the United States, where she earned her DDS at Loma Linda University. That background still shapes how she works: an artist's eye for proportion, warmth and detail.",
    "With more than ten years focused on cosmetic dentistry and advanced training at the Kois Center, Dr. Green designs smiles that are personalized and naturally balanced — combining artistry, technology and comprehensive dentistry in a single plan.",
  ],
  credentials: [
    "DDS · Loma Linda University",
    "Advanced Kois Center training",
    "10+ years in cosmetic dentistry",
    "Best Cosmetic Dentist · Best of the City 2025",
  ],
};

export const differentiators = [
  {
    icon: "face",
    title: "Facially Driven Smile Design",
    text: "Smile designs planned around facial structure, lips, gum line and individual proportions.",
  },
  {
    icon: "microscope",
    title: "Digital Precision",
    text: "Advanced photography, digital smile design, X-rays, 3D imaging and smile visualization.",
  },
  {
    icon: "sparkles",
    title: "Concierge-Level Care",
    text: "Highly personalized treatment planning with the patient actively involved in aesthetic decisions.",
  },
  {
    icon: "award",
    title: "Award-Winning Expertise",
    text: "Coastal Smiles Newport Beach was recognized as Best Cosmetic Dentist in Best of the City 2025.",
  },
];

export const infraGallery = [
  { src: infra1, alt: "Reception at our Newport Beach studio" },
  { src: infra2, alt: "Private, calm waiting lounge" },
  { src: infra3, alt: "Treatment suite with advanced technology" },
  { src: infra4, alt: "Digital smile design and 3D planning" },
];

export const infraHighlights = [
  "Digital smile design and smile visualization before treatment begins",
  "3D imaging, advanced photography and digital X-rays on site",
  "One dentist, one plan — continuity of care from consult to final result",
];

export const reviews = [
  {
    initials: "MR",
    name: "Mary Rafalovich",
    text: "Dr. Green is highly competent, caring and professional. She is meticulous in her work and has a way of making you feel completely relaxed.",
  },
  {
    initials: "PS",
    name: "Patrick Sommerfield",
    text: "An excellent experience from start to finish. My appointment was right on time, the treatment was painless, and the office is exceptionally clean with modern equipment.",
  },
  {
    initials: "DL",
    name: "Daniel Loo",
    text: "I have been a patient for years. Dr. Green is thorough and attentive, and her team is every bit as good.",
  },
];

export const faq = [
  {
    q: "What happens at a smile consultation?",
    a: "Dr. Green reviews your goals, examines your teeth, bite and gum line, and captures advanced photography and imaging. From there she walks you through a personalized plan and, where useful, a digital preview of your future smile.",
  },
  {
    q: "Will my veneers look natural?",
    a: "That is the entire point of a facially driven design. Shape, length, tone and gum line are planned around your face and lips, so the result reads as your smile rather than a set of teeth.",
  },
  {
    q: "Do you offer general dentistry as well as cosmetic treatment?",
    a: "Yes. Alongside cosmetic care, Coastal Smiles provides exams, cleanings, crowns and bridges, implant restorations, TMJ/TMD care and preventive dentistry.",
  },
  {
    q: "How long does a smile makeover take?",
    a: "It depends on the plan. Whitening or bonding can be completed quickly, while veneers, orthodontics or full mouth reconstruction are sequenced over several visits. You will have a clear timeline before treatment begins.",
  },
  {
    q: "How do I schedule?",
    a: "Call (949) 640-9554 or send your details through the consultation form and our team will follow up to confirm a time that works for you.",
  },
];

export const specialtiesOptions = [
  "Porcelain Veneers",
  "Smile Makeovers",
  "Invisalign",
  "Professional Teeth Whitening",
  "Full Mouth Reconstruction",
  "Porcelain Crowns & Bridges",
  "Dental Bonding",
  "Implant Restorations",
  "Gum Contouring",
  "TMJ/TMD and General Dentistry",
];

export const contactPreferences = [
  "Phone call",
  "Email",
  "Either is fine",
];
