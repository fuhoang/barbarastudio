import type { Language, ServiceCategory, Testimonial, UiCopy } from "@/components/home/types";

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Nails Services",
    illustration: "/illustrations/nails-service.svg",
    illustrationAlt: "Nails service illustration",
    groups: [
      {
        name: "Manicures",
        items: [
          "Classic Manicure",
          "Russian Manicure (Dry precision manicure)",
          "Gel Manicure",
          "BIAB / Builder Gel Overlay",
          "Luxury Spa Manicure",
        ],
      },
      {
        name: "Extensions & Enhancements",
        items: [
          "Gel Extensions",
          "Acrylic Extensions",
          "Polygel Extensions",
          "Sculpted Nail Extensions",
          "Infills / Rebalance",
        ],
      },
      {
        name: "Design & Finishing",
        items: [
          "French Tip",
          "Baby Boomer (Ombre)",
          "Chrome / Glazed Finish",
          "Nail Art (Basic)",
          "Nail Art (Advanced / Custom Design)",
          "3D Nail Art",
          "Swarovski / Crystal Embellishments",
        ],
      },
      {
        name: "Removal & Repair",
        items: [
          "Gel Removal",
          "Acrylic Removal",
          "Repair (Per Nail)",
          "Soak Off + Mini Manicure",
        ],
      },
    ],
  },
  {
    title: "Eyebrow Services",
    illustration: "/illustrations/eyebrow-service.svg",
    illustrationAlt: "Eyebrow service illustration",
    groups: [
      {
        name: "Shaping & Grooming",
        items: [
          "Brow Shaping (Wax or Thread)",
          "Brow Trim",
          "Brow Clean-Up",
        ],
      },
      {
        name: "Tinting & Definition",
        items: ["Brow Tint", "Hybrid Tint", "Henna Brows"],
      },
      {
        name: "Advanced Brow Styling",
        items: [
          "Brow Lamination",
          "Lamination + Tint",
          "Lamination + Shape + Tint (Full Brow Sculpt)",
        ],
      },
      {
        name: "Enhancement Services",
        items: [
          "Brow Mapping",
          "Brow Correction",
          "Brow Restoration Consultation",
        ],
      },
    ],
  },
  {
    title: "Eyelash Services",
    illustration: "/illustrations/eyelash-service.svg",
    illustrationAlt: "Eyelash service illustration",
    groups: [
      {
        name: "Lash Extensions",
        items: [
          "Classic Full Set",
          "Hybrid Full Set",
          "Volume Full Set",
          "Mega Volume Full Set",
          "Wispy / Kim K Style Set",
        ],
      },
      {
        name: "Maintenance",
        items: ["2-Week Infill", "3-Week Infill", "Lash Removal"],
      },
      {
        name: "Natural Enhancement",
        items: ["Lash Lift", "Lash Lift + Tint", "Bottom Lash Tint"],
      },
      {
        name: "Add-Ons",
        items: ["Lash Bath", "Aftercare Kit"],
      },
    ],
  },
];

export const testimonialsByLanguage: Record<Language, Testimonial[]> = {
  en: [
    {
      quote:
        "Everything feels polished, calm, and incredibly detailed from start to finish.",
      name: "Ava",
    },
    {
      quote:
        "My brows stay clean and lifted, and the finish always looks soft rather than overdone.",
      name: "Nadia",
    },
    {
      quote:
        "My lash set lasted beautifully and still felt light, soft, and comfortable every day.",
      name: "Sofia",
    },
    {
      quote:
        "The nail shape and finish were flawless, and the whole appointment felt private and relaxing.",
      name: "Mila",
    },
  ],
  es: [
    {
      quote:
        "Todo se siente pulido, tranquilo y cuidadosamente detallado de principio a fin.",
      name: "Ava",
    },
    {
      quote:
        "Mis cejas se mantienen definidas y elevadas, con un resultado suave y nada exagerado.",
      name: "Nadia",
    },
    {
      quote:
        "Mis pestañas duraron precioso y se sintieron ligeras, suaves y cómodas cada día.",
      name: "Sofia",
    },
    {
      quote:
        "La forma y el acabado de mis uñas fueron impecables, y toda la cita fue privada y relajante.",
      name: "Mila",
    },
  ],
};

export const uiByLanguage: Record<Language, UiCopy> = {
  es: {
    brandSubtitle: "Tratamientos de belleza estética",
    navServices: "Servicios",
    navBookNow: "Reservar",
    heroHeadline: "El Arte de la belleza",
    heroParagraphOne:
      "La belleza es el arte de realzar lo que ya está presente: perfilar, definir e iluminar los rasgos naturales con intención y cuidado.",
    heroParagraphTwo:
      "A través de precisión, equilibrio y suavidad, la verdadera belleza crea una confianza que se siente natural y única.",
    heroBookNow: "Reservar",
    heroViewServices: "Ver servicios",
    lashesLabel: "Pestañas",
    nailsLabel: "Uñas",
    hairLabel: "Cabello",
    browsLabel: "Cejas",
    treatmentsLabel: "Tratamientos",
    servicesHeadline: "Belleza detallista, adaptada a tus rasgos.",
    servicesDescription:
      "Cada servicio se diseña con preparación impecable, forma precisa y resultados duraderos para elevar tu rutina diaria.",
    testimonialsHeading: "Testimonios",
    bookingsLabel: "Reservas",
    contactHeadline: "Luce impecable. Siéntete natural.",
    contactDescription:
      "Citas de martes a sábado, consultas personalizadas y planes de tratamiento adaptados a tu agenda.",
    callLabel: "Llamar 00 0000 0000",
    emailAria: "Correo",
    instagramAria: "Instagram",
    whatsappAria: "WhatsApp",
  },
  en: {
    brandSubtitle: "Aesthetic beauty treatments",
    navServices: "Services",
    navBookNow: "Book now",
    heroHeadline: "The Art of beauty",
    heroParagraphOne:
      "Beauty is the art of enhancing what is already there — refining, shaping, and illuminating natural features with intention and care.",
    heroParagraphTwo:
      "Through precision, balance, and softness, true beauty creates confidence that feels effortless and uniquely yours.",
    heroBookNow: "Book now",
    heroViewServices: "View services",
    lashesLabel: "Lashes",
    nailsLabel: "Nails",
    hairLabel: "Hair",
    browsLabel: "Eyebrows",
    treatmentsLabel: "Treatments",
    servicesHeadline: "Detail-led beauty, tailored to your features.",
    servicesDescription:
      "Each service is built around clean prep, considered shaping, and long-wear results that elevate your everyday routine.",
    testimonialsHeading: "Testimonials",
    bookingsLabel: "Bookings",
    contactHeadline: "Stay polished. Stay effortless.",
    contactDescription:
      "Tuesday to Saturday appointments, bespoke consultations, and treatment plans built around your schedule.",
    callLabel: "Call 00 0000 0000",
    emailAria: "Email",
    instagramAria: "Instagram",
    whatsappAria: "WhatsApp",
  },
};
