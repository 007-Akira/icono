import { referenceImages } from "./images";

// Service content is intentionally price-free. Enquiries lead to WhatsApp, where
// the salon can confirm suitability, availability, and current service details.
export type ServiceItem = { name: string; description: string; pendingConfirmation?: boolean };
export type ServiceCategory = { title: string; description?: string; items: ServiceItem[] };
export type ServicePageData = {
  slug:
    "hair" | "skin-facial" | "bridal-makeup" | "beauty-essentials" | "spa-grooming" | "speciality";
  title: string;
  navName: string;
  eyebrow: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  categories: ServiceCategory[];
  visualBreaks: { src: string; alt: string }[];
  metaTitle: string;
  metaDescription: string;
};

const item = (name: string, description: string, pendingConfirmation = false): ServiceItem => ({
  name,
  description,
  pendingConfirmation,
});

// Page content lives here rather than inside components so service names and
// descriptions can be edited without changing the rendering system.
export const services: ServicePageData[] = [
  {
    slug: "hair",
    title: "Hair",
    navName: "Hair",
    eyebrow: "Services",
    subtitle: "Cut · Colour · Styling · Treatments",
    intro:
      "From considered cuts and contemporary colour to salon treatments, Icono's hair services are shaped around your style, texture and preferred finish.",
    heroImage: referenceImages.hair,
    metaTitle: "Hair Services in Kollam | Icono Beauty World & Makeover Studio",
    metaDescription:
      "Explore hair cutting, styling, colouring and salon hair treatments at Icono Beauty World & Makeover Studio in Karicode, Kollam.",
    visualBreaks: [
      { src: referenceImages.darkHair, alt: "Editorial close-up of dark styled hair texture" },
      { src: referenceImages.warmHair, alt: "Warm editorial hair texture" },
    ],
    categories: [
      {
        title: "Cuts & Styling",
        items: [
          item("U Cut", "A soft rounded shape that creates an even, gently curved finish."),
          item("V Cut", "A tapered back shape with a defined point through the centre."),
          item("Straight Cut", "A clean, even-length cut with a simple structured finish."),
          item(
            "Mushroom / Bob Cut",
            "Short, structured styles tailored to suit the face and preferred length.",
          ),
          item("Layer Cut", "Soft, structured layers designed to add movement and shape."),
          item(
            "Step Cut",
            "Defined graduated sections that create visible movement through the length.",
          ),
          item("Feather Cut", "Lightly textured layers designed for a soft, feathered appearance."),
          item(
            "Butterfly Cut",
            "Face-framing shorter layers balanced with longer lengths through the back.",
          ),
          item("Baby Cut", "A gentle haircut shaped for young children and easy everyday care."),
          item(
            "Baby Trim",
            "A light maintenance trim to keep children's hair neat and manageable.",
          ),
          item(
            "Front Bangs / Fringe",
            "A front section shaped to frame the face and refresh your style.",
          ),
        ],
      },
      {
        title: "Hair Colouring",
        items: [
          item(
            "Black / Dark Brown",
            "Classic deeper shades applied for coverage or a refreshed natural-looking tone.",
          ),
          item(
            "Root Touch-Up",
            "Targeted colour application intended to blend visible regrowth between full colour services.",
          ),
          item(
            "Global Colour — Natural",
            "Natural-toned colour applied throughout the hair for a consistent overall finish.",
          ),
          item(
            "Global Colour — Fashion",
            "A fashion-toned colour service selected after discussing your preferred shade.",
          ),
          item(
            "Half Highlights",
            "Selected sections of lighter colour used across part of the hair.",
          ),
          item(
            "Full Highlights",
            "Highlights placed throughout the hair to create visible contrast and dimension.",
          ),
          item(
            "Funky Colour",
            "Creative colour placement using a shade selected during consultation.",
          ),
        ],
      },
      {
        title: "Hair Treatments",
        items: [
          item(
            "Smoothening / Straightening",
            "A salon service intended to create a smoother, straighter and more manageable finish.",
          ),
          item(
            "Nano Plastia",
            "Also known as Hair Plastia, this is a salon conditioning and smoothing service; suitability can be discussed before booking.",
          ),
          item(
            "Volumizing",
            "A styling-focused service intended to create a fuller-looking finish and added lift.",
          ),
          item(
            "Keratin",
            "A salon smoothing service intended to reduce frizz and create a polished finish.",
          ),
          item(
            "Hair Botox",
            "A deep-conditioning salon treatment focused on smoothness, softness and manageability.",
          ),
          item(
            "Hair Polishing",
            "A finishing service intended to enhance smoothness and visible shine.",
          ),
          item(
            "Henna Treatment",
            "A traditional henna-based hair service offered after discussing your preferred result.",
          ),
          item(
            "Hot Oil Massage",
            "A warm oil hair and scalp massage offered as a relaxing care service.",
          ),
        ],
      },
    ],
  },
  {
    slug: "skin-facial",
    title: "Skin & Facial",
    navName: "Skin & Facial",
    eyebrow: "Services",
    subtitle: "Facials · Care · Glow · Treatments",
    intro:
      "Explore Icono's salon facial and skin-care services, with options selected around your preferences and concerns.",
    heroImage: referenceImages.skin,
    metaTitle: "Facial & Skin Care Services in Kollam | Icono",
    metaDescription:
      "Explore facial, clean-up and beauty-care services at Icono Beauty World & Makeover Studio near TKM Arts College, Karicode, Kollam.",
    visualBreaks: [{ src: referenceImages.treatment, alt: "Editorial skin-care texture" }],
    categories: [
      {
        title: "Facial Care",
        items: [
          item("Clean Up", "A simple salon cleansing service for a fresh, cared-for appearance."),
          item("Ordinary Facial", "A classic facial routine selected for regular salon skin care."),
          item(
            "Mixed Fruit Facial",
            "A fruit-based salon facial offered as part of routine skin care.",
          ),
          item("Papaya Facial", "A papaya-based facial service with a gentle salon-care focus."),
          item(
            "Flower Facial",
            "A floral-product facial routine offered for regular cosmetic skin care.",
          ),
          item(
            "Pearl Facial",
            "A pearl-themed facial selected for a fresh and polished-looking finish.",
          ),
          item(
            "Vitamin C Facial",
            "A Vitamin C facial selected for clients seeking a fresh-looking finish.",
          ),
          item(
            "Cherry Blossom Facial",
            "A salon facial using a cherry blossom themed product routine.",
          ),
          item(
            "Aroma Fairness Facial",
            "The salon's listed aroma facial for a brighter-looking cosmetic finish.",
          ),
          item("Gold Facial", "A gold-themed facial routine offered for occasion or regular care."),
          item(
            "Diamond Facial",
            "A diamond-themed salon facial selected around your preferred finish.",
          ),
          item(
            "Silver Facial",
            "A silver-themed facial routine offered as a salon beauty service.",
          ),
          item(
            "Shehnaz Flower Facial",
            "A Shehnaz floral-product facial offered as a salon beauty routine.",
          ),
          item(
            "Shehnaz Thermoherb Mask",
            "A brochure-listed Shehnaz mask service; suitability is discussed before booking.",
          ),
        ],
      },
      {
        title: "Glow & Hydration",
        items: [
          item(
            "Skin Whitening Facial",
            "The salon's listed facial for clients seeking a brighter-looking cosmetic finish.",
          ),
          item(
            "Skin Brightening Facial",
            "A cosmetic facial service focused on a fresh and brighter-looking appearance.",
          ),
          item(
            "Bridal Glow Facial",
            "A pre-occasion facial option discussed around your bridal beauty schedule.",
          ),
          item(
            "BB Glow",
            "A salon beauty service offered for clients seeking an even-looking cosmetic finish.",
          ),
          item(
            "Hydra Facial",
            "A salon facial focused on cleansing, hydration and a smoother, refreshed-looking finish.",
          ),
        ],
      },
      {
        title: "Concern-Based Care",
        items: [
          item(
            "Skin Tightening Facial",
            "A cosmetic facial option for clients seeking a firmer-looking finish.",
          ),
          item(
            "Anti-Aging Facial",
            "A salon facial focused on moisturised, refreshed and cared-for-looking skin.",
          ),
          item(
            "Pimples Treatment",
            "A salon care service for clients concerned about blemish-prone-looking skin.",
          ),
          item(
            "Pigmentation Treatment",
            "A salon care service for concerns about uneven-looking tone or visible pigmentation.",
          ),
          item(
            "Wrinkle Treatment",
            "A cosmetic salon service for clients concerned about the appearance of fine lines.",
          ),
        ],
      },
    ],
  },
  {
    slug: "bridal-makeup",
    title: "Bridal & Makeup",
    navName: "Bridal & Makeup",
    eyebrow: "Services",
    subtitle: "Bridal · Party · HD · Contemporary Looks",
    intro:
      "Makeup services for weddings and occasions, shaped around your preferred style, outfit and event.",
    heroImage: referenceImages.bridal,
    metaTitle: "Bridal Makeup in Kollam | Icono Makeover Studio",
    metaDescription:
      "Explore bridal makeup, party makeup and makeover services at Icono Beauty World & Makeover Studio in Karicode, Kollam. Enquire about your event via WhatsApp.",
    visualBreaks: [{ src: referenceImages.tools, alt: "Editorial beauty tools and makeup detail" }],
    categories: [
      {
        title: "Bridal Makeup",
        items: [
          item(
            "Bridal Makeup",
            "A complete bridal makeup look planned around your features, outfit and occasion.",
          ),
          item(
            "HD Makeup",
            "A detailed makeup finish designed with photography and event lighting in mind.",
          ),
          item(
            "HD Skin Glass",
            "A high-definition makeup style focused on a luminous, polished-looking finish.",
          ),
          item(
            "Skin Glow Makeup",
            "A makeup look centred on a fresh, radiant-looking cosmetic finish.",
          ),
          item(
            "Waterproof Makeup",
            "A water-resistant makeup option discussed according to your event and preferences.",
          ),
        ],
      },
      {
        title: "Occasion Makeup",
        items: [
          item(
            "Party Makeup",
            "An occasion-ready makeup look tailored to your outfit and preferred style.",
          ),
          item(
            "Basic Makeup",
            "A simple, polished makeup application for understated occasions and everyday events.",
          ),
          item(
            "Soft Look",
            "A softly defined makeup style using balanced colour and gentle detailing.",
          ),
          item(
            "Nude Makeup",
            "A neutral-toned makeup look designed for an understated, refined finish.",
          ),
          item(
            "Brazilian Look",
            "The salon's listed makeup style; exact finish can be discussed before booking.",
          ),
        ],
      },
    ],
  },
  {
    slug: "beauty-essentials",
    title: "Beauty Essentials",
    navName: "Beauty Essentials",
    eyebrow: "Services",
    subtitle: "Threading · Waxing · Bleaching · Grooming",
    intro:
      "Everyday beauty and grooming services delivered with careful attention to shape, finish and comfort.",
    heroImage: referenceImages.beautyEssentials,
    metaTitle: "Beauty & Grooming Services in Kollam | Icono",
    metaDescription:
      "Explore threading, waxing, bleaching, D-Tan and grooming services at Icono Beauty World & Makeover Studio in Karicode, Kollam.",
    visualBreaks: [{ src: referenceImages.softFabric, alt: "Soft editorial beauty-care texture" }],
    categories: [
      {
        title: "Threading",
        items: [
          item("Eyebrow", "Precise shaping and clean-up tailored to your natural brow line."),
          item("Upper Lip", "Threading for tidy removal of visible hair above the lip."),
          item("Lower Lip", "Focused threading for visible hair below the lower lip."),
          item("Chin", "Targeted threading for a clean and carefully finished chin area."),
          item("Forehead", "Threading to tidy visible hair across the forehead area."),
          item("Side Lock", "Threading to neaten the side facial area with a balanced finish."),
          item(
            "Full Face",
            "A complete facial threading service tailored to your grooming preference.",
          ),
        ],
      },
      {
        title: "Waxing",
        items: [
          item(
            "Arms / Hands",
            "Waxing for the arms or hands with the selected coverage discussed first.",
          ),
          item("Legs", "Leg waxing with coverage selected according to your grooming needs."),
          item("Underarm", "Focused underarm waxing delivered as a routine grooming service."),
          item(
            "Full Body",
            "A broader waxing service with included areas confirmed before booking.",
          ),
        ],
      },
      {
        title: "Bleaching / D-Tan",
        description: "Coverage options listed in the Icono brochure.",
        items: [
          item(
            "D-Tan Bleach",
            "A cosmetic bleach service intended for a brighter, more even-looking finish.",
          ),
          item("Half / Full Back", "Bleaching or D-Tan coverage for the selected back area."),
          item("Half / Full Front", "Bleaching or D-Tan coverage for the selected front area."),
          item(
            "Full Front / Arms",
            "Combined front and arm coverage, confirmed before the service begins.",
          ),
          item(
            "Half Arms / Leg",
            "Selected arm or leg coverage discussed according to your preference.",
          ),
          item(
            "Full Leg / Body",
            "Broader coverage with included areas confirmed during consultation.",
          ),
        ],
      },
    ],
  },
  {
    slug: "spa-grooming",
    title: "Spa & Grooming",
    navName: "Spa & Grooming",
    eyebrow: "Services",
    subtitle: "Hair Spa · Hands · Feet · Body Care",
    intro: "Salon spa and grooming services for hair, hands, feet and body care.",
    heroImage: referenceImages.spaGrooming,
    metaTitle: "Hair Spa, Manicure & Grooming in Kollam | Icono",
    metaDescription:
      "Explore hair spa, manicure, pedicure, foot spa and salon grooming services at Icono Beauty World & Makeover Studio in Kollam.",
    visualBreaks: [{ src: referenceImages.treatment, alt: "Editorial treatment texture" }],
    categories: [
      {
        title: "Hair Spa",
        items: [
          item(
            "Normal Hair Spa",
            "A regular salon hair-spa service focused on conditioning and manageability.",
          ),
          item(
            "L'Oréal Normal Spa",
            "A regular hair-spa routine using L'Oréal products selected by the salon.",
          ),
          item(
            "L'Oréal Dandruff Spa",
            "A salon scalp-care option for clients concerned about visible flakes.",
          ),
          item(
            "L'Oréal Protein Spa",
            "A protein-based salon conditioning service for a cared-for hair finish.",
          ),
          item(
            "L'Oréal Pro-Keratin Spa",
            "A Pro-Keratin product routine focused on a smoother, conditioned finish.",
          ),
          item(
            "L'Oréal B6 + Biotin Spa",
            "A brochure-listed L'Oréal conditioning routine for salon hair care.",
          ),
          item(
            "L'Oréal Xtenso Care",
            "A salon care routine intended for clients with chemically straightened hair.",
          ),
          item(
            "Matrix Opti Care Spa",
            "A Matrix hair-spa routine selected for smoothness and manageability.",
          ),
          item(
            "Biolage Coloured Hair Spa",
            "A Biolage salon routine intended for colour-treated hair care.",
          ),
          item(
            "Biolage Frizzy Hair Spa",
            "A Biolage conditioning routine focused on smoother, manageable-looking hair.",
          ),
          item(
            "Biolage Dry Hair Spa",
            "A Biolage conditioning routine intended for dry-feeling hair.",
          ),
        ],
      },
      {
        title: "Hand & Foot Care",
        items: [
          item("Manicure", "Nail shaping and hand grooming for a neat, polished appearance."),
          item("Normal Pedicure", "Foot and nail grooming focused on a clean, polished finish."),
          item("Foot Spa", "A salon foot-care routine combining grooming with a relaxing soak."),
          item("Kiana Foot Spa", "A brochure-listed foot-spa routine using Kiana products."),
        ],
      },
      {
        title: "Body Care",
        items: [
          item(
            "Schwarzkopf Body Spa",
            "A brochure-listed cosmetic body-care service using Schwarzkopf products.",
          ),
        ],
      },
    ],
  },
  {
    slug: "speciality",
    title: "Speciality Services",
    navName: "Speciality Services",
    eyebrow: "Services",
    subtitle: "Extensions · Piercing · Styling · Creative Services",
    intro: "Explore Icono's additional styling, piercing and creative beauty services.",
    heroImage: referenceImages.speciality,
    metaTitle: "Speciality Beauty Services in Kollam | Icono",
    metaDescription:
      "Explore hair extensions, eyebrow filling, piercing and other confirmed speciality beauty services at Icono in Karicode, Kollam.",
    visualBreaks: [{ src: referenceImages.tools, alt: "Editorial salon tools and styling detail" }],
    categories: [
      {
        title: "Hair, Brows & Nails",
        items: [
          item(
            "Hair Extensions",
            "Added hair sections selected around your preferred length, volume and finish.",
          ),
          item(
            "Eyebrow Filling",
            "Cosmetic brow definition designed around your existing shape and preferred look.",
          ),
          item(
            "Permanent Microblading",
            "A semi-permanent brow service requiring an in-person suitability and aftercare consultation.",
          ),
          item(
            "Acrylic Powder Nail Art",
            "Creative nail styling using acrylic powder, shaped around your preferred design.",
          ),
        ],
      },
      {
        title: "Piercing",
        items: [
          item(
            "Ear Piercing",
            "An ear-piercing service with placement and aftercare guidance discussed in person.",
          ),
          item(
            "Ear Lobe Piercing",
            "A focused lobe-piercing service with placement confirmed before proceeding.",
          ),
        ],
      },
      {
        title: "Advanced & Creative Services",
        items: [
          item(
            "Microneedling",
            "A brochure-listed advanced skin service available only after an in-person suitability consultation.",
          ),
          item(
            "BB Glow",
            "A salon beauty service offered for clients seeking an even-looking cosmetic finish.",
          ),
          item(
            "Wart Removal",
            "Brochure-listed service requiring confirmation of method, practitioner and suitability before booking.",
            true,
          ),
          item(
            "Tattoo Designing",
            "Brochure-listed creative service; scope and method require confirmation before booking.",
            true,
          ),
        ],
      },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
