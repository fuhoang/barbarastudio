export type Language = "en" | "es";

export type UiCopy = {
  brandSubtitle: string;
  navServices: string;
  navBookNow: string;
  skipToContent: string;
  heroHeadline: string;
  heroParagraphOne: string;
  heroParagraphTwo: string;
  heroBookNow: string;
  heroViewServices: string;
  lashesLabel: string;
  nailsLabel: string;
  hairLabel: string;
  browsLabel: string;
  treatmentsLabel: string;
  servicesHeadline: string;
  servicesDescription: string;
  testimonialsHeading: string;
  bookingsLabel: string;
  contactHeadline: string;
  contactDescription: string;
  callLabel: string;
  emailAria: string;
  emailIconAria: string;
  instagramAria: string;
  whatsappAria: string;
};

export type ServiceGroup = {
  name: string;
  items: string[];
};

export type ServiceCategory = {
  title: string;
  illustration: string;
  illustrationAlt: string;
  groups: ServiceGroup[];
};

export type Testimonial = {
  quote: string;
  name: string;
};
