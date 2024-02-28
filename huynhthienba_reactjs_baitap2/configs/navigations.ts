export const NAVIGATIONS = [
  {
    name: "home",
    label: "Home",
    href: "/",
    active: ["/"],
  },
  {
    name: "apps",
    group: true,
    label: "Apps",
    menu: [
      {
        name: "todo",
        label: "Todo",
        href: "/todo",
        active: ["/todo/"],
      },
      {
        name: "management",
        label: "Management",
        href: "/management",
        active: ["/management/"],
      },
    ],
  },
  {
    name: "contact",
    label: "Contact",
    href: "/contact",
    active: ["/contact"],
  },
];
