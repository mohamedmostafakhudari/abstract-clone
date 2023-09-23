import { dollar, flexible, helpDesk, jigsaw, lock, skills } from "./assets";
export const benefits = [
  {
    title: "Using Abstract",
    content:
      "Abstract lets you manage, version, and document your designs in one place.",
    imgSrc: flexible,
  },
  {
    title: "Manage your account",
    content:
      "Configure your account settings, such as your email, profile details, and password.",
    imgSrc: skills,
  },
  {
    title: "Manage organizations, teams, and projects",
    content:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    imgSrc: jigsaw,
  },
  {
    title: "Manage billing",
    content: "Change subscriptions and payment details.",
    imgSrc: dollar,
  },
  {
    title: "Authenticate to Abstract",
    content: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    imgSrc: lock,
  },
  {
    title: "Abstract support",
    content: "Get in touch with a human.",
    imgSrc: helpDesk,
  },
];
export const footerItems = [
  {
    title: "Abstract",
    links: [
      {
        name: "Start Trial",
        href: "#",
      },
      {
        name: "P.ricing",
        href: "#",
      },
      {
        name: "Download",
        href: "#",
      },
    ],
    subItem: null,
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        href: "#",
      },
      {
        name: "Help Center",
        href: "#",
      },
      {
        name: "Release Notes",
        href: "#",
      },
      {
        name: "Status",
        href: "#",
      },
    ],
    subItem: null,
  },
  {
    title: "Community",
    links: [
      {
        name: "Twitter",
        href: "#",
      },
      {
        name: "LinkedIn",
        href: "#",
      },
      {
        name: "Facebook",
        href: "#",
      },
      {
        name: "Dribbble",
        href: "#",
      },
      {
        name: "Podcast",
        href: "#",
      },
    ],
    subItem: null,
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Legal",
        href: "#",
      },
    ],
    subItem: {
      title: "Contact Us",
      link: "info@abstract.com",
    },
  },
];
