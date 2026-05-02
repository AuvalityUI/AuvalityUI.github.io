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
 *   hero.png            — Hero section logo / main image
 *   logo.png            — Subtle background watermark (white, no background)
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
  header: {
    name: "Auvality",
    role: "Game UI/UX & Logo Designer",
    statusText: "Available · New Prices",
    avatar: "./pictures/avatar.png",
    socials: {
      x: "#",
      discord: "#",
    },
  },

  hero: {
    title: "AUVALITY",
    subtitle: "Game UI Designer",
    ctaLeft: "View Services",
    ctaRight: "Book a Slot",
    footerNote: "",
  },

  services: {
    pill: "Services",
    title: "What I Do",
    desc: "All my work, thoughtfully refined and cleanly presented.",
    cards: [
      {
        label: "Anime",
        desc: "Anime style UIs.",
        images: [
          "./pictures/picture1.png",
          "./pictures/picture2.png",
          "./pictures/picture3.png",
        ],
        featured: false,
      },
      {
        badge: "Most Popular",
        name: "Venture",
        desc: "The Most Popular",
        price: "R$6000 + (Tax)",
        priceNote: "per project",
        features: [
          "Per Frame",
          "Importing Included",
          "Fast Delivery",
          "4 Revisions",
          "Included Source File",
        ],
        featured: true,
      },
      {
        badge: "Full Suite",
        name: "Sonoma",
        desc: "Banners & Logos",
        price: "R$7000 + (Tax)",
        priceNote: "per project",
        features: [
          "Source File Included",
          "Fast Delivery",
          "4 Revisions",
          "3 Day Turnaround",
        ],
        featured: false,
      },
    ],
  },

  booking: {
    pill: "Booking",
    title: "Let's Work Together",
    desc: "Fill out the form below and I'll get back to you within Placeholder hours.",
    successTitle: "Request Sent!",
    successMessage: "Thanks for reaching out — expect a reply within 24 hours.",
    budgetOptions: [
      "Equara – R$4500 + (Tax)",
      "Venture – R$6000 + (Tax)",
      "Sonoma – R$7000 + (Tax)",
      "Custom / Let's discuss",
    ],
  },

  community: {
    title: "Full Portfolio",
    desc: "Want to see more? Join now.",
    badgeText: "Discord Server",
    infoTitle: "Placeholder",
    infoDesc: "The Complete Experience.",
    joinBtnText: "Join Server",
    inviteLink: "https://discord.gg/YxDBg28Uxa",
    serverId: "1406339465630191706",
  },

  footer: {
    brandName: "Game UI Designer",
    tagline: "Placeholder",
    copyright: "© 2025 Auvality · All rights reserved",
    socials: {
      x: "#",
      discord: "#",
    },
  },
};
