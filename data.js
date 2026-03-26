/**
 * data.js — Single source of truth for all site content.
 *
 * HOW IT WORKS:
 *   - Text and links are defined here and injected into the page by index.html's boot script.
 *   - Images are referenced by path. All image files must live in the /pictures/ folder.
 *   - To edit the site: change values here, save, and refresh — no need to touch index.html.
 *
 * IMAGE NAMING CONVENTION:
 *   avatar.png          — Header / profile photo (38×38 displayed, any square PNG works)
 *   picture1.png        — Modern UI/UX card, pop-out image left    (card 1, slot 1)
 *   picture2.png        — Modern UI/UX card, pop-out image right   (card 1, slot 2)
 *   picture3.png        — Modern UI/UX card, pop-out image centre  (card 1, slot 3)
 *   picture4.png        — Cartoony UI/UX card, pop-out left        (card 2, slot 1)
 *   picture5.png        — Cartoony UI/UX card, pop-out right       (card 2, slot 2)
 *   picture6.png        — Cartoony UI/UX card, pop-out centre      (card 2, slot 3)
 *   picture7.png        — Sci-Fi UI/UX card, pop-out left          (card 3, slot 1)
 *   picture8.png        — Sci-Fi UI/UX card, pop-out right         (card 3, slot 2)
 *   picture9.png        — Sci-Fi UI/UX card, pop-out centre        (card 3, slot 3)
 *   picture10.png       — Fantasy UI/UX card, pop-out left         (card 4, slot 1)
 *   picture11.png       — Fantasy UI/UX card, pop-out right        (card 4, slot 2)
 *   picture12.png       — Fantasy UI/UX card, pop-out centre       (card 4, slot 3)
 *   picture13.png       — Anime UI/UX card, pop-out left           (card 5, slot 1)
 *   picture14.png       — Anime UI/UX card, pop-out right          (card 5, slot 2)
 *   picture15.png       — Anime UI/UX card, pop-out centre         (card 5, slot 3)
 *   picture16.png       — Logos card, pop-out left                 (card 6, slot 1)
 *   picture17.png       — Logos card, pop-out right                (card 6, slot 2)
 *   picture18.png       — Logos card, pop-out centre               (card 6, slot 3)
 *
 * All lightbox grids also use picture1–picture18 in the same groupings as the cards.
 */

const SITE_DATA = {

  /* ─────────────────────────────────────────────────────────────
     HEADER
  ───────────────────────────────────────────────────────────── */
  header: {
    name:       "Auvality",                    // Shown next to the avatar and in the <title>
    role:       "Game UI/UX & Logo Designer",  // Sub-line under the name
    statusText: "Available · New Prices",       // Green-dot status badge text

    /** Avatar image — place file at /pictures/avatar.png */
    avatar: "./pictures/avatar.png",

    socials: {
      x:         "#",   // URL for X / Twitter button
      instagram: "#",   // URL for Instagram button
      discord:   "#",   // URL for Discord button
      linkedin:  "#",   // URL for LinkedIn button
    },
  },

  /* ─────────────────────────────────────────────────────────────
     HERO SECTION
  ───────────────────────────────────────────────────────────── */
  hero: {
    title:    "AUVALITY",        // Large metallic heading
    subtitle: "Game UI Designer", // Line below the title
    ctaLeft:  "View Services",   // Left CTA button text (links to #services)
    ctaRight: "Book a Slot",     // Right CTA button text (links to #booking)
    footerNote: "",              // Small muted text below buttons — leave empty to hide
  },

  /* ─────────────────────────────────────────────────────────────
     SERVICES SECTION  (#services)
  ───────────────────────────────────────────────────────────── */
  services: {
    pill:  "Services",
    title: "What I Do",           // Section heading
    desc:  "Specialised game UI/UX and logo design across six distinct visual styles.",

    /**
     * Each card has:
     *   label  — shown as the card title and as the lightbox heading
     *   desc   — short sub-line on the card
     *   images — exactly 3 paths; order: [left pop-out, right pop-out, centre pop-out]
     *            These same 3 images are also shown in the lightbox grid.
     */
    cards: [
      {
        label:  "Modern UI/UX",
        desc:   "Clean, minimal game interfaces",
        images: [
          "./pictures/picture1.png",
          "./pictures/picture2.png",
          "./pictures/picture3.png",
        ],
      },
      {
        label:  "Cartoony UI/UX",
        desc:   "Playful, expressive styles",
        images: [
          "./pictures/picture4.png",
          "./pictures/picture5.png",
          "./pictures/picture6.png",
        ],
      },
      {
        label:  "Sci-Fi UI/UX",
        desc:   "Futuristic, tech-driven interfaces",
        images: [
          "./pictures/picture7.png",
          "./pictures/picture8.png",
          "./pictures/picture9.png",
        ],
      },
      {
        label:  "Fantasy UI/UX",
        desc:   "Mythical, ornate design systems",
        images: [
          "./pictures/picture10.png",
          "./pictures/picture11.png",
          "./pictures/picture12.png",
        ],
      },
      {
        label:  "Anime UI/UX",
        desc:   "Dynamic, illustrative styles",
        images: [
          "./pictures/picture13.png",
          "./pictures/picture14.png",
          "./pictures/picture15.png",
        ],
      },
      {
        label:  "Logos",
        desc:   "Memorable brand identities",
        images: [
          "./pictures/picture16.png",
          "./pictures/picture17.png",
          "./pictures/picture18.png",
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     PROJECTS SECTION  (#projects)
  ───────────────────────────────────────────────────────────── */
  projects: {
    pill:  "Projects",
    title: "Selected Work",
    desc:  "Case studies and shipped projects.",
    comingSoonLabel: "Projects Coming Soon",
  },

  /* ─────────────────────────────────────────────────────────────
     ABOUT SECTION  (#about)
  ───────────────────────────────────────────────────────────── */
  about: {
    pill:  "About",
    title: "Who I Am",
    desc:  "A bit about the designer behind the work.",

    bioLabel: "Background",

    /** Two bio paragraphs. Use <strong> tags for bold inline text. */
    bio: [
      "I'm a freelance game UI/UX designer with a passion for <strong>immersive, handcrafted interfaces</strong> that feel native to their world. Every pixel is intentional.",
      "Whether it's a minimal HUD or an elaborate fantasy menu system, I work closely with clients to hit the exact tone their game demands.",
    ],

    stats: [
      { num: "50+", label: "Projects Done"  },
      { num: "3+",  label: "Years Active"   },
      { num: "30+", label: "Happy Clients"  },
      { num: "6",   label: "Style Ranges"   },
    ],

    process: [
      {
        step:  "01",
        title: "Briefing",
        desc:  "We discuss your vision, references, and goals in detail.",
      },
      {
        step:  "02",
        title: "Concept",
        desc:  "Initial direction sketches and style explorations.",
      },
      {
        step:  "03",
        title: "Design",
        desc:  "Full production of all screens and assets.",
      },
      {
        step:  "04",
        title: "Delivery",
        desc:  "Source files, exports, and any follow-up revisions.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     TESTIMONIALS SECTION  (#testimonials)
     The track duplicates automatically — just fill this list.
  ───────────────────────────────────────────────────────────── */
  testimonials: {
    pill:  "Testimonials",
    title: "What Clients Say",
    desc:  "Honest words from people I've worked with.",

    reviews: [
      {
        body:   "Absolutely nailed the sci-fi aesthetic — the HUD feels like it shipped with the game engine itself.",
        name:   "Client Name",
        role:   "Indie Studio Lead",
        avatar: "CS",
      },
      {
        body:   "Fast turnaround, clear communication, and the logo perfectly captured our brand.",
        name:   "Client Name",
        role:   "Game Developer",
        avatar: "CN",
      },
      {
        body:   "The fantasy UI set we commissioned is stunning — players keep commenting on how polished it looks.",
        name:   "Client Name",
        role:   "RPG Studio",
        avatar: "CN",
      },
      {
        body:   "Delivered exactly what I asked for on the first revision. Will hire again.",
        name:   "Client Name",
        role:   "Solo Developer",
        avatar: "CN",
      },
      {
        body:   "The cartoony style was spot-on — vibrant without being overwhelming.",
        name:   "Client Name",
        role:   "Mobile Games",
        avatar: "CN",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     PRICING SECTION  (#pricing)
  ───────────────────────────────────────────────────────────── */
  pricing: {
    pill:  "Pricing",
    title: "Simple, Transparent Pricing",
    desc:  "Pick the plan that fits your scope. Custom quotes available on request.",

    plans: [
      {
        badge:    "Starter",
        name:     "Basic",
        desc:     "Great for single screens or simple logo work.",
        price:    "49",         // Number only — $ symbol added automatically
        priceNote:"per screen",
        features: [
          "1 UI screen or logo",
          "2 revision rounds",
          "PNG + source file delivery",
          "3-day turnaround",
        ],
        featured: false,
      },
      {
        badge:    "Most Popular",
        name:     "Standard",
        desc:     "Full menu flow or mid-sized branding package.",
        price:    "149",
        priceNote:"per project",
        features: [
          "Up to 5 UI screens",
          "4 revision rounds",
          "PNG + source file delivery",
          "Priority communication",
          "5-day turnaround",
        ],
        featured: true,         // Adds highlight border + glow
      },
      {
        badge:    "Full Suite",
        name:     "Premium",
        desc:     "Complete UI system for a full game release.",
        price:    "349",
        priceNote:"per project",
        features: [
          "Unlimited screens",
          "Unlimited revisions",
          "Full asset kit delivery",
          "Style guide included",
          "Priority support",
          "10-day turnaround",
        ],
        featured: false,
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     BOOKING SECTION  (#booking)
  ───────────────────────────────────────────────────────────── */
  booking: {
    pill:  "Booking",
    title: "Let's Work Together",
    desc:  "Fill out the form below and I'll get back to you within 24 hours.",

    successTitle:   "Request Sent!",
    successMessage: "Thanks for reaching out — expect a reply within 24 hours.",

    /** Budget dropdown options shown in the booking form */
    budgetOptions: [
      "Basic – $49",
      "Standard – $149",
      "Premium – $349",
      "Custom / Let's discuss",
    ],
  },

  /* ─────────────────────────────────────────────────────────────
     FOOTER
  ───────────────────────────────────────────────────────────── */
  footer: {
    brandName: "Game UI Designer",
    tagline:   "Crafting immersive interfaces for games.",
    copyright: "© 2025 Auvality · All rights reserved",

    socials: {
      x:         "#",
      instagram: "#",
      discord:   "#",
      linkedin:  "#",
    },
  },

};
