import type { Language, ServiceCategory, Testimonial, UiCopy } from "@/components/home/types";

export const serviceCategoriesByLanguage: Record<Language, ServiceCategory[]> = {
  en: [
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
  ],
  es: [
    {
      title: "Servicios de Uñas",
      illustration: "/illustrations/nails-service.svg",
      illustrationAlt: "Ilustración de servicio de uñas",
      groups: [
        {
          name: "Manicuras",
          items: [
            "Manicura clásica",
            "Manicura rusa (manicura en seco de precisión)",
            "Manicura en gel",
            "Superposición BIAB / gel constructor",
            "Manicura spa de lujo",
          ],
        },
        {
          name: "Extensiones y Mejoras",
          items: [
            "Extensiones de gel",
            "Extensiones acrílicas",
            "Extensiones de polygel",
            "Extensiones esculpidas de uñas",
            "Relleno / rebalanceo",
          ],
        },
        {
          name: "Diseño y Acabado",
          items: [
            "Punta francesa",
            "Baby Boomer (ombré)",
            "Acabado cromo / efecto glaseado",
            "Nail art (básico)",
            "Nail art (avanzado / diseño personalizado)",
            "Nail art 3D",
            "Adornos Swarovski / cristales",
          ],
        },
        {
          name: "Retiro y Reparación",
          items: [
            "Retiro de gel",
            "Retiro de acrílico",
            "Reparación (por uña)",
            "Soak off + mini manicura",
          ],
        },
      ],
    },
    {
      title: "Servicios de Cejas",
      illustration: "/illustrations/eyebrow-service.svg",
      illustrationAlt: "Ilustración de servicio de cejas",
      groups: [
        {
          name: "Diseño y Arreglo",
          items: [
            "Diseño de cejas (cera o hilo)",
            "Recorte de cejas",
            "Limpieza de cejas",
          ],
        },
        {
          name: "Tinte y Definición",
          items: ["Tinte de cejas", "Tinte híbrido", "Cejas con henna"],
        },
        {
          name: "Estilizado Avanzado de Cejas",
          items: [
            "Laminado de cejas",
            "Laminado + tinte",
            "Laminado + diseño + tinte (escultura completa de cejas)",
          ],
        },
        {
          name: "Servicios de Realce",
          items: [
            "Mapeo de cejas",
            "Corrección de cejas",
            "Consulta para restauración de cejas",
          ],
        },
      ],
    },
    {
      title: "Servicios de Pestañas",
      illustration: "/illustrations/eyelash-service.svg",
      illustrationAlt: "Ilustración de servicio de pestañas",
      groups: [
        {
          name: "Extensiones de Pestañas",
          items: [
            "Set clásico completo",
            "Set híbrido completo",
            "Set volumen completo",
            "Set mega volumen completo",
            "Set estilo wispy / Kim K",
          ],
        },
        {
          name: "Mantenimiento",
          items: ["Relleno de 2 semanas", "Relleno de 3 semanas", "Retiro de pestañas"],
        },
        {
          name: "Realce Natural",
          items: ["Lifting de pestañas", "Lifting + tinte", "Tinte de pestañas inferiores"],
        },
        {
          name: "Extras",
          items: ["Limpieza de pestañas", "Kit de cuidado posterior"],
        },
      ],
    },
  ],
  pt: [
    {
      title: "Serviços de Unhas",
      illustration: "/illustrations/nails-service.svg",
      illustrationAlt: "Ilustração de serviço de unhas",
      groups: [
        {
          name: "Manicure",
          items: [
            "Manicure clássica",
            "Manicure russa (manicure de precisão a seco)",
            "Manicure em gel",
            "Aplicação de BIAB / gel construtor",
            "Manicure spa de luxo",
          ],
        },
        {
          name: "Extensões e Melhorias",
          items: [
            "Extensões de gel",
            "Extensões acrílicas",
            "Extensões de polygel",
            "Extensões esculpidas",
            "Reequilíbrio / reforço (infills)",
          ],
        },
        {
          name: "Design e Acabamento",
          items: [
            "Ponta francesa",
            "Baby boomer (ombré)",
            "Acabamento cromado / efeito brilho",
            "Nail art (básica)",
            "Nail art (avançada / design personalizado)",
            "Nail art 3D",
            "Acessórios Swarovski / cristais",
          ],
        },
        {
          name: "Remoção e Reparo",
          items: [
            "Remoção de gel",
            "Remoção de acrílico",
            "Reparo (por unha)",
            "Soak off + mini manicure",
          ],
        },
      ],
    },
    {
      title: "Serviços de Sobrancelha",
      illustration: "/illustrations/eyebrow-service.svg",
      illustrationAlt: "Ilustração de serviço de sobrancelhas",
      groups: [
        {
          name: "Modelagem e Aparo",
          items: [
            "Modelagem de sobrancelha (cera ou fio)",
            "Penteado",
            "Limpeza de sobrancelhas",
          ],
        },
        {
          name: "Pigmentação e Definição",
          items: ["Coloração de sobrancelhas", "Coloração híbrida", "Sobrancelha com henna"],
        },
        {
          name: "Estilo Avançado",
          items: [
            "Laminação de sobrancelhas",
            "Laminação + coloração",
            "Laminação + modelagem + coloração (escultura completa)",
          ],
        },
        {
          name: "Serviços de Realce",
          items: [
            "Mapeamento de sobrancelhas",
            "Correção de sobrancelhas",
            "Consulta para restauração de sobrancelhas",
          ],
        },
      ],
    },
    {
      title: "Serviços de Cílios",
      illustration: "/illustrations/eyelash-service.svg",
      illustrationAlt: "Ilustração de serviço de cílios",
      groups: [
        {
          name: "Extensões de Cílios",
          items: [
            "Set completo clássico",
            "Set completo híbrido",
            "Set completo volume",
            "Set completo mega volume",
            "Set estilo wispy / Kim K",
          ],
        },
        {
          name: "Manutenção",
          items: ["Manutenção de 2 semanas", "Manutenção de 3 semanas", "Remoção de cílios"],
        },
        {
          name: "Realce Natural",
          items: ["Lift de cílios", "Lift + coloração", "Coloração do cílio inferior"],
        },
        {
          name: "Extras",
          items: ["Banho de cílios", "Kit de cuidados pós atendimento"],
        },
      ],
    },
  ],
};

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
  pt: [
    {
      quote:
        "Tudo fica impecável, calmo e cheio de atenção aos detalhes do início ao fim.",
      name: "Ava",
    },
    {
      quote:
        "Meus cílios continuam definidos e elevados, com acabamento suave e discreto, nunca exagerado.",
      name: "Nadia",
    },
    {
      quote:
        "Meu alongamento de cílios durou lindamente e permaneceu leve, macio e confortável todos os dias.",
      name: "Sofia",
    },
    {
      quote:
        "O formato e o acabamento das minhas unhas ficaram impecáveis, e toda a consulta foi tranquila e acolhedora.",
      name: "Mila",
    },
  ],
};

export const uiByLanguage: Record<Language, UiCopy> = {
  es: {
    brandSubtitle: "Tratamientos de belleza estética",
    navServices: "Servicios",
    navBookNow: "Reservar",
    skipToContent: "Saltar al contenido",
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
    callLabel: "Llamar 04241257083",
    emailAria: "Correo",
    emailIconAria: "Icono de correo",
    instagramAria: "Instagram",
    whatsappAria: "WhatsApp",
  },
  pt: {
    brandSubtitle: "Tratamentos estéticos de beleza",
    navServices: "Serviços",
    navBookNow: "Agendar",
    skipToContent: "Pular para o conteúdo",
    heroHeadline: "A Arte da Beleza",
    heroParagraphOne:
      "A beleza é a arte de valorizar o que já existe: definir, modelar e iluminar os traços naturais com intenção e cuidado.",
    heroParagraphTwo:
      "Com precisão, equilíbrio e suavidade, uma beleza verdadeira gera confiança que parece natural e inteira.",
    heroBookNow: "Agendar",
    heroViewServices: "Ver serviços",
    lashesLabel: "Cílios",
    nailsLabel: "Unhas",
    hairLabel: "Cabelo",
    browsLabel: "Sobrancelhas",
    treatmentsLabel: "Tratamentos",
    servicesHeadline: "Beleza detalhada, adaptada ao seu rosto.",
    servicesDescription:
      "Cada serviço é criado com preparo impecável, modelagem precisa e acabamento duradouro para elevar sua rotina diária.",
    testimonialsHeading: "Depoimentos",
    bookingsLabel: "Agendamentos",
    contactHeadline: "Brilhe impecavelmente. Sinta-se natural.",
    contactDescription:
      "Atendimentos de terça a sábado, consultas personalizadas e planos de tratamento ajustados à sua agenda.",
    callLabel: "Ligar 04241257083",
    emailAria: "E-mail",
    emailIconAria: "Ícone de e-mail",
    instagramAria: "Instagram",
    whatsappAria: "WhatsApp",
  },
  en: {
    brandSubtitle: "Aesthetic beauty treatments",
    navServices: "Services",
    navBookNow: "Book now",
    skipToContent: "Skip to content",
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
    callLabel: "Call 04241257083",
    emailAria: "Email",
    emailIconAria: "Email icon",
    instagramAria: "Instagram",
    whatsappAria: "WhatsApp",
  },
};
