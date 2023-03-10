import { GuestsEnum } from "../interfaces/redux";

export const footerData: {
  title: string;
  childs: {
    title: string;
    link: string;
  }[];
}[] = [
  {
    title: "Support",
    childs: [
      {
        title: "Help Center",
        link: "/",
      },
      {
        title: "AirCover",
        link: "/",
      },
      {
        title: "Supporting people with disabilities",
        link: "/",
      },
      {
        title: "Cancellation options",
        link: "/",
      },
      {
        title: "Our COVID-19 Response",
        link: "/",
      },
      {
        title: "Report a neighborhood concern",
        link: "/",
      },
    ],
  },
  {
    title: "Community",
    childs: [
      {
        title: "Airbnb.org: disaster relief housing",
        link: "/",
      },
      {
        title: "Combating discrimination",
        link: "/",
      },
    ],
  },
  {
    title: "Hosting",
    childs: [
      {
        title: "Airbnb your home",
        link: "/",
      },
      {
        title: "AirCover for Hosts",
        link: "/",
      },
      {
        title: "Explore hosting resources",
        link: "/",
      },
      {
        title: "Visit our community forum",
        link: "/",
      },
      {
        title: "How to host responsibly",
        link: "/",
      },
      {
        title: "Airbnb-friendly apartments",
        link: "/",
      },
    ],
  },
  {
    title: "Airbnb",
    childs: [
      {
        title: "Newsroom",
        link: "/",
      },
      {
        title: "Learn about new features",
        link: "/",
      },
      {
        title: "Letter from our founders",
        link: "/",
      },
      {
        title: "Careers",
        link: "/",
      },
      {
        title: "Investors",
        link: "/",
      },
      {
        title: "Gift cards",
        link: "/",
      },
    ],
  },
];

export const guestSearch: {
  title: string;
  sub: string;
  hint: GuestsEnum;
  tail: "adults" | "children" | "infants" | "pets";
}[] = [
  {
    title: "Adults",
    sub: "Ages 13 or above",
    hint: GuestsEnum.ADULTS,
    tail: "adults",
  },
  {
    title: "Children",
    sub: "Ages 2???12",
    hint: GuestsEnum.CHILDREN,
    tail: "children",
  },
  {
    title: "Infants",
    sub: "Under 2",
    hint: GuestsEnum.INFANTS,
    tail: "infants",
  },
  {
    title: "Pets",
    sub: "",
    hint: GuestsEnum.PETS,
    tail: "pets",
  },
];
