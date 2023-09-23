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
