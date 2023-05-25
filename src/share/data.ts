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
    sub: "Ages 2–12",
    hint: GuestsEnum.CHILDREN,
    tail: "children",
  },
  // {
  //   title: "Infants",
  //   sub: "Under 2",
  //   hint: GuestsEnum.INFANTS,
  //   tail: "infants",
  // },
  {
    title: "Pets",
    sub: "",
    hint: GuestsEnum.PETS,
    tail: "pets",
  },
];

export const filtersNB: {
  title: string | number;
  hint: "ALL" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "MAX";
}[] = [
  {
    title: "Any",
    hint: "ALL",
  },
  {
    title: 1,
    hint: 1,
  },
  {
    title: 2,
    hint: 2,
  },
  {
    title: 3,
    hint: 3,
  },
  {
    title: 4,
    hint: 4,
  },
  {
    title: 5,
    hint: 5,
  },
  {
    title: 6,
    hint: 6,
  },
  {
    title: 7,
    hint: 7,
  },
  {
    title: "8+",
    hint: "MAX",
  },
];

export const filtersRoom: {
  title: string;
  hint: "beds" | "bedRooms" | "bathRooms";
}[] = [
  {
    title: "Bedrooms",
    hint: "bedRooms",
  },
  {
    title: "Beds",
    hint: "beds",
  },
  {
    title: "Bathrooms",
    hint: "bathRooms",
  },
];


export const payInfo: {
  title: string;
  hint: "PAY_FULL" | "PAY_PART";
  sub?: string;
}[] = [
  {
    title: "Pay full",
    hint: "PAY_FULL",
    sub: "Pay the total and you're all set.",
  },
  {
    title: "Pay part now, part later",
    hint: "PAY_PART",
  },
];
