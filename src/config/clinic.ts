/**
 * CLINIC BRAND DATA — not translated.
 * Coastal Smiles Newport Beach — Dr. Daniele Green, DDS
 * All written copy lives in src/i18n.
 */

import infra1 from "@/assets/infra-1.jpg";
import infra2 from "@/assets/infra-2.jpg";
import infra3 from "@/assets/infra-3.jpg";
import case1Before from "@/assets/case1-an.jpg.asset.json";
import case1After from "@/assets/case1-dp.jpg.asset.json";
import case2Before from "@/assets/case2-an.jpg.asset.json";
import case2After from "@/assets/case2-dp.jpg.asset.json";
import case3Before from "@/assets/case3-an.jpg.asset.json";
import case3After from "@/assets/case3-dp.jpg.asset.json";
import case4Before from "@/assets/case4-an.jpg.asset.json";
import case4After from "@/assets/case4-dp.jpg.asset.json";
import case5Before from "@/assets/case5-an.jpg.asset.json";
import case5After from "@/assets/case5-dp.jpg.asset.json";
import case6Before from "@/assets/case6-an.jpg.asset.json";
import case6After from "@/assets/case6-dp.jpg.asset.json";
import case7Before from "@/assets/case7-an.jpg.asset.json";
import case7After from "@/assets/case7-dp.jpg.asset.json";
import logoWhiteAsset from "@/assets/logo-white.png.asset.json";
import logoDarkAsset from "@/assets/logo-dark.png.asset.json";
import drHeroAsset from "@/assets/dr-green-hero.jpg.asset.json";
import drPortraitAsset from "@/assets/dr-green-portrait.jpg.asset.json";
import drOfficeAsset from "@/assets/dr-green-office.jpg.asset.json";
import drScannerAsset from "@/assets/dr-green-scanner.jpg.asset.json";

export const brand = {
  logoWhite: logoWhiteAsset.url,
  logoDark: logoDarkAsset.url,
  logoAlt: "Coastal Smiles Newport Beach",
};

export const heroPoster = drHeroAsset.url;
export const drPortrait = drPortraitAsset.url;
export const ctaImage = drOfficeAsset.url;

export const clinic = {
  name: "Coastal Smiles Newport Beach",
  shortName: "Coastal Smiles",
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
};

export const infraImages = [infra1, infra2, infra3, drScannerAsset.url];

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
  { caseNumber: "05", beforeImage: case5Before.url, afterImage: case5After.url },
  { caseNumber: "06", beforeImage: case6Before.url, afterImage: case6After.url },
  { caseNumber: "07", beforeImage: case7Before.url, afterImage: case7After.url },
];
