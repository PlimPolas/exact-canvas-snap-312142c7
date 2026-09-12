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

const title = "Instituto Oral Premium | Dentista 24h na Savassi, BH";
const description =
  "Clínica odontológica premium na Savassi, Belo Horizonte: plantão 24 horas, implantes guiados 3D, lentes de contato dental, Invisalign e sedação sem dor.";

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
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Getúlio Vargas, 1649",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    openingHours: "Mo-Su 00:00-23:59",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "2400" },
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
