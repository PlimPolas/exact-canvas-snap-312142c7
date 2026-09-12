import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { BookingProvider } from "@/components/landing/booking-context";
import { BookingModal } from "@/components/landing/BookingModal";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Stats } from "@/components/landing/Stats";
import { Treatments } from "@/components/landing/Treatments";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Team } from "@/components/landing/Team";
import { Infra } from "@/components/landing/Infra";
import { Reviews } from "@/components/landing/Reviews";
import { Faq } from "@/components/landing/Faq";
import { Location } from "@/components/landing/Location";
import { CtaBanner } from "@/components/landing/CtaBanner";
import { Footer } from "@/components/landing/Footer";
import { CallFab } from "@/components/landing/CallFab";
import { clinic, faq } from "@/config/clinic";

const title = "Coastal Smiles Newport Beach | Dr. Daniele Green, DDS";
const description =
  "Award-winning cosmetic dentistry in Newport Beach. Porcelain veneers, smile makeovers, Invisalign and comprehensive care with Dr. Daniele Green, DDS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    description,
    telephone: clinic.phoneLabel,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.streetAddress,
      addressLocality: clinic.locality,
      addressRegion: clinic.region,
      postalCode: clinic.postalCode,
      addressCountry: "US",
    },
    openingHours: ["Mo-Tu 08:00-17:00", "We-Th 09:00-17:00", "Fr 08:00-12:00"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3" },
    mainEntityOfPage: {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  };

  return (
    <BookingProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Treatments />
        <BeforeAfter />
        <Team />
        <Infra />
        <Reviews />
        <Faq />
        <Location />
        <CtaBanner />
      </main>
      <Footer />
      <CallFab />
      <BookingModal />
      <Toaster position="top-center" richColors />
    </BookingProvider>
  );
}
