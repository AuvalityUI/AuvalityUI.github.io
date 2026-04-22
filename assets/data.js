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
    name:       "Auvality",                    
    role:       "Game UI/UX & Logo Designer",  
    statusText: "Available · New Prices",       
    avatar: "./pictures/avatar.png",

    socials: {
      x:         "#",  
      instagram: "#",   
      discord:   "#",   
      linkedin:  "#",   
    },
  },
  hero: {
    title:    "AUVALITY",     
    subtitle: "Game UI Designer", 
    ctaLeft:  "View Services",   
    ctaRight: "Book a Slot",     
    footerNote: "",              
  },
  services: {
    pill:  "Services",
    title: "What I Do",          
    desc:  "Placeholder",
    cards: [
      {
        label:  "Placeholder",
        desc:   "Placeholder",
        images: [
          "./pictures/picture1.png",
          "./pictures/picture2.png",
          "./pictures/picture3.png",
        ],
      },
      {
        label:  "Placeholder",
        desc:   "Placeholder",
        images: [
          "./pictures/picture4.png",
          "./pictures/picture5.png",
          "./pictures/picture6.png",
        ],
      },
      {
        label:  "Placeholder",
        desc:   "Placeholder",
        images: [
          "./pictures/picture7.png",
          "./pictures/picture8.png",
          "./pictures/picture9.png",
        ],
      },
      {
        label:  "Placeholder",
        desc:   "Placeholder",
        images: [
          "./pictures/picture10.png",
          "./pictures/picture11.png",
          "./pictures/picture12.png",
        ],
      },
      {
        label:  "Placeholder",
        desc:   "Placeholder",
        images: [
          "./pictures/picture13.png",
          "./pictures/picture14.png",
          "./pictures/picture15.png",
        ],
      },
      {
        label:  "Placeholder",
        desc:   "Placeholder",
        images: [
          "./pictures/picture16.png",
          "./pictures/picture17.png",
          "./pictures/picture18.png",
        ],
      },
    ],
  },
  projects: {
    pill:  "Projects",
    title: "Selected Work",
    desc:  "Shipped projects.",
    comingSoonLabel: "Projects Coming Soon",
  },
  about: {
    pill:  "About",
    title: "Who I Am",
    desc:  "A bit about the designer behind the work.",
    bioLabel: "Background",
    bio: [
      "Placeholder",
      "Placeholder",
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
        desc:  "Placeholder",
      },
      {
        step:  "02",
        title: "Concept",
        desc:  "Placeholder",
      },
      {
        step:  "03",
        title: "Design",
        desc:  "Placeholder",
      },
      {
        step:  "04",
        title: "Delivery",
        desc:  "Placeholder",
      },
    ],
  },
  testimonials: {
    pill:  "Testimonials",
    title: "What Clients Say",
    desc:  "Placeholder",
    reviews: [
      {
        body:   "Placeholder",
        name:   "Client Name",
        role:   "Placeholder",
        avatar: "CS",
      },
      {
        body:   "Placeholder",
        name:   "Client Name",
        role:   "Placeholder",
        avatar: "CN",
      },
      {
        body:   "Placeholder",
        name:   "Client Name",
        role:   "Placeholder",
        avatar: "CN",
      },
      {
        body:   "Placeholder",
        name:   "Client Name",
        role:   "Placeholder",
        avatar: "CN",
      },
      {
        body:   "Placeholder.",
        name:   "Client Name",
        role:   "Placeholder",
        avatar: "CN",
      },
    ],
  },
  pricing: {
    pill:  "Pricing",
    title: "Transparent Pricing",
    desc:  "Placeholder",
    plans: [
      {
        badge:    "Starter",
        name:     "Basic",
        desc:     "Placeholder",
        price:    "49",       
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
        desc:     "Placeholder",
        price:    "149",
        priceNote:"per project",
        features: [
          "Placeholder",
          "Placeholder",
          "Placeholder",
          "Placeholder",
          "Placeholder",
        ],
        featured: true,      
      },
      {
        badge:    "Full Suite",
        name:     "Premium",
        desc:     "Placeholder",
        price:    "349",
        priceNote:"per project",
        features: [
          "Placeholder",
          "Placeholder",
          "Placeholder",
          "Placeholder",
          "Placeholder",
          "Placeholder",
        ],
        featured: false,
      },
    ],
  },
  booking: {
    pill:  "Booking",
    title: "Let's Work Together",
    desc:  "Fill out the form below and I'll get back to you within Placeholder hours.",

    successTitle:   "Request Sent!",
    successMessage: "Thanks for reaching out — expect a reply within 24 hours.",
    budgetOptions: [
      "Basic – $49",
      "Standard – $149",
      "Premium – $349",
      "Custom / Let's discuss",
    ],
  },
  community: {
    title:       "Placeholder",        
    desc:        "Placeholder",        

    badgeText:   "Discord Server",     
    infoTitle:   "Placeholder",        
    infoDesc:    "Placeholder",        
    joinBtnText: "Join Server",        
    inviteLink:  "https://discord.gg/YxDBg28Uxa",
    serverId: "1406339465630191706",
  },
  footer: {
    brandName: "Game UI Designer",
    tagline:   "Placeholder",
    copyright: "© 2025 Auvality · All rights reserved",
    socials: {
      x:         "#",
      instagram: "#",
      discord:   "#",
      linkedin:  "#",
    },
  },
};
