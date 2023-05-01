import { Card, gemCost } from "./splendor_rules";

export const tier1Cards: Array<Card> = [
  {
    name: "Sandman",
    color: "red",
    cost: gemCost({ orange: 4 }),
    avengerCount: 0,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Electro",
    color: "red",
    cost: gemCost({ red: 1, orange: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Crystal",
    color: "red",
    cost: gemCost({ purple: 2, orange: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Mysterio",
    color: "red",
    cost: gemCost({ orange: 3 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Kingpin",
    color: "orange",
    cost: gemCost({ purple: 2, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Spider-Ham",
    color: "orange",
    cost: gemCost({ purple: 2, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Wasp",
    color: "blue",
    cost: gemCost({ orange: 2, blue: 1, yellow: 2 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Elektra",
    color: "blue",
    cost: gemCost({ purple: 2, yellow: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "M.O.D.O.K.",
    color: "yellow",
    cost: gemCost({ red: 2, orange: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Spider-Woman",
    color: "yellow",
    cost: gemCost({ red: 3, blue: 1, yellow: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Prowler",
    color: "yellow",
    cost: gemCost({ purple: 1, red: 2, orange: 1, blue: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Squirrel Girl",
    color: "yellow",
    cost: gemCost({ purple: 2, red: 2, orange: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Kraven",
    color: "purple",
    cost: gemCost({ blue: 3 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Lizard",
    color: "purple",
    cost: gemCost({ purple: 1, blue: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "America Chavez",
    color: "purple",
    cost: gemCost({ red: 1, blue: 3, yellow: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Gorgon",
    color: "purple",
    cost: gemCost({ blue: 2, yellow: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Rocket",
    color: "yellow",
    cost: gemCost({ red: 2, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Vulture",
    color: "yellow",
    cost: gemCost({ red: 4 }),
    avengerCount: 0,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Abomination",
    color: "purple",
    cost: gemCost({ purple: 1, red: 1, orange: 1, blue: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Scorpion",
    color: "purple",
    cost: gemCost({ blue: 4 }),
    avengerCount: 0,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Taskmaster",
    color: "blue",
    cost: gemCost({ yellow: 4 }),
    avengerCount: 0,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Moon Knight",
    color: "blue",
    cost: gemCost({ yellow: 3 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Bullseye",
    color: "blue",
    cost: gemCost({ purple: 1, red: 2, orange: 1, blue: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Scarlet Spider",
    color: "orange",
    cost: gemCost({ purple: 2, red: 1, orange: 1, blue: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Spider-Girl",
    color: "orange",
    cost: gemCost({ purple: 1, orange: 1, blue: 1, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Valkyrie",
    color: "blue",
    cost: gemCost({ purple: 1, orange: 1, yellow: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Triton",
    color: "red",
    cost: gemCost({ red: 1, orange: 1, blue: 1, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Lockjaw",
    color: "blue",
    cost: gemCost({ purple: 1, orange: 1, blue: 1, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Grandmaster",
    color: "yellow",
    cost: gemCost({ purple: 1, red: 1, blue: 1, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Baron Zemo",
    color: "yellow",
    cost: gemCost({ red: 3 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Spider-Man 2099",
    color: "blue",
    cost: gemCost({ red: 1, yellow: 2 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Silver Sable",
    color: "orange",
    cost: gemCost({ purple: 3 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Hawkeye",
    color: "orange",
    cost: gemCost({ purple: 2, blue: 2, yellow: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Kate Bishop",
    color: "orange",
    cost: gemCost({ purple: 3, red: 1, blue: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Yondu",
    color: "orange",
    cost: gemCost({ purple: 4 }),
    avengerCount: 0,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Quake",
    color: "red",
    cost: gemCost({ purple: 1, orange: 3, blue: 1 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Wong",
    color: "red",
    cost: gemCost({ red: 1, orange: 2, blue: 1, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Ms. Marvel",
    color: "red",
    cost: gemCost({ red: 1, orange: 2, yellow: 2 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Winter Soldier",
    color: "purple",
    cost: gemCost({ red: 2, orange: 1, blue: 2 }),
    avengerCount: 1,
    points: 0,
    hasTimeStone: false,
  },
  {
    name: "Rhino",
    color: "purple",
    cost: gemCost({ purple: 1, orange: 1, blue: 1, yellow: 1 }),
    avengerCount: 0,
    points: 0,
    hasTimeStone: false,
  },
];

export const tier2Cards: Array<Card> = [
  {
    name: "Carnage",
    color: "purple",
    cost: gemCost({ red: 3, yellow: 5 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Punisher",
    color: "orange",
    cost: gemCost({ red: 5 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Shuri",
    color: "yellow",
    cost: gemCost({ orange: 3, blue: 2, yellow: 3 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Hela",
    color: "red",
    cost: gemCost({ blue: 6 }),
    avengerCount: 0,
    points: 3,
    hasTimeStone: false,
  },
  {
    name: "Star-Lord",
    color: "orange",
    cost: gemCost({ red: 4, orange: 2, blue: 1 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Scarlet Witch",
    color: "red",
    cost: gemCost({ red: 2, blue: 3, yellow: 2 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Jessica Jones",
    color: "purple",
    cost: gemCost({ yellow: 6 }),
    avengerCount: 0,
    points: 3,
    hasTimeStone: false,
  },
  {
    name: "Ronan",
    color: "purple",
    cost: gemCost({ yellow: 5 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Miles Morales",
    color: "blue",
    cost: gemCost({ purple: 5 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Maximus",
    color: "yellow",
    cost: gemCost({ red: 1, orange: 4, blue: 2 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Quicksilver",
    color: "blue",
    cost: gemCost({ purple: 3, red: 3, yellow: 2 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Maria Hill",
    color: "yellow",
    cost: gemCost({ purple: 2, orange: 3, blue: 2 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "She-Hulk",
    color: "purple",
    cost: gemCost({ purple: 2, orange: 2, yellow: 3 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Daredevil",
    color: "orange",
    cost: gemCost({ red: 6 }),
    avengerCount: 0,
    points: 3,
    hasTimeStone: false,
  },
  {
    name: "Falcon",
    color: "orange",
    cost: gemCost({ purple: 2, red: 3, yellow: 3 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Medusa",
    color: "red",
    cost: gemCost({ blue: 5, orange: 3 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Groot",
    color: "orange",
    cost: gemCost({ red: 5, purple: 3 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "The Collector",
    color: "yellow",
    cost: gemCost({ orange: 5 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Venom",
    color: "red",
    cost: gemCost({ blue: 5 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Nebula",
    color: "blue",
    cost: gemCost({ purple: 6 }),
    avengerCount: 0,
    points: 3,
    hasTimeStone: false,
  },
  {
    name: "Karnak",
    color: "yellow",
    cost: gemCost({ orange: 5, yellow: 3 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Nick Fury",
    color: "orange",
    cost: gemCost({ purple: 2, red: 3, orange: 2 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "War Machine",
    color: "blue",
    cost: gemCost({ purple: 3, orange: 2, blue: 2 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Ghost Rider",
    color: "red",
    cost: gemCost({ purple: 1, blue: 4, yellow: 2 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Crossbones",
    color: "purple",
    cost: gemCost({ orange: 1, blue: 2, yellow: 4 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Ghost-Spider",
    color: "blue",
    cost: gemCost({ purple: 4, orange: 1, blue: 2 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Beta Ray Bill",
    color: "red",
    cost: gemCost({ red: 3, orange: 2, blue: 3 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
  {
    name: "Black Cat",
    color: "blue",
    cost: gemCost({ purple: 5, red: 3 }),
    avengerCount: 0,
    points: 2,
    hasTimeStone: false,
  },
  {
    name: "Red Skull",
    color: "yellow",
    cost: gemCost({ orange: 6 }),
    avengerCount: 0,
    points: 3,
    hasTimeStone: false,
  },
  {
    name: "Okoye",
    color: "purple",
    cost: gemCost({ purple: 3, blue: 2, yellow: 3 }),
    avengerCount: 1,
    points: 1,
    hasTimeStone: false,
  },
];

export const tier3Cards: Array<Card> = [
  {
    name: "Iron Man",
    color: "yellow",
    cost: {
      purple: 0,
      red: 3,
      orange: 3,
      blue: 5,
      yellow: 3,
    },
    avengerCount: 2,
    points: 3,
    hasTimeStone: true,
  },
  {
    name: "Captain America",
    color: "orange",
    cost: {
      purple: 3,
      red: 0,
      orange: 3,
      blue: 3,
      yellow: 5,
    },
    avengerCount: 2,
    points: 3,
    hasTimeStone: true,
  },
  {
    name: "Ant-Man",
    color: "blue",
    cost: {
      purple: 0,
      red: 6,
      orange: 3,
      blue: 0,
      yellow: 3,
    },
    avengerCount: 1,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Vision",
    color: "yellow",
    cost: {
      purple: 0,
      red: 3,
      orange: 0,
      blue: 6,
      yellow: 3,
    },
    avengerCount: 1,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Doctor Octopus",
    color: "yellow",
    cost: {
      purple: 0,
      red: 0,
      orange: 0,
      blue: 7,
      yellow: 0,
    },
    avengerCount: 0,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Doctor Strange",
    color: "red",
    cost: {
      purple: 7,
      red: 0,
      orange: 0,
      blue: 0,
      yellow: 0,
    },
    avengerCount: 1,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Iron Fist",
    color: "blue",
    cost: gemCost({ red: 7 }),
    avengerCount: 0,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Captain Marvel",
    color: "purple",
    cost: gemCost({ purple: 3, orange: 6, blue: 3 }),
    avengerCount: 1,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Spider-Man",
    color: "orange",
    cost: gemCost({ red: 3, yellow: 7 }),
    avengerCount: 0,
    points: 5,
    hasTimeStone: true,
  },
  {
    name: "Drax",
    color: "purple",
    cost: gemCost({ orange: 7 }),
    avengerCount: 0,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Loki",
    color: "red",
    cost: gemCost({ purple: 7, blue: 3 }),
    avengerCount: 0,
    points: 5,
    hasTimeStone: true,
  },
  {
    name: "Green Goblin",
    color: "yellow",
    cost: gemCost({ purple: 3, blue: 7 }),
    avengerCount: 0,
    points: 5,
    hasTimeStone: true,
  },
  {
    name: "Luke Cage",
    color: "purple",
    cost: gemCost({ orange: 7, yellow: 3 }),
    avengerCount: 0,
    points: 5,
    hasTimeStone: true,
  },
  {
    name: "Nova",
    color: "red",
    cost: gemCost({ purple: 6, orange: 3, red: 3 }),
    avengerCount: 0,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Black Widow",
    color: "blue",
    cost: gemCost({ purple: 3, red: 5, blue: 3, yellow: 3 }),
    avengerCount: 2,
    points: 3,
    hasTimeStone: true,
  },
  {
    name: "Hulk",
    color: "purple",
    cost: gemCost({ purple: 3, red: 3, orange: 5, blue: 3 }),
    avengerCount: 2,
    points: 3,
    hasTimeStone: true,
  },
  {
    name: "Gamora",
    color: "blue",
    cost: gemCost({ red: 7, orange: 3 }),
    avengerCount: 0,
    points: 5,
    hasTimeStone: true,
  },
  {
    name: "Black Panther",
    color: "orange",
    cost: gemCost({ purple: 3, orange: 3, yellow: 6 }),
    avengerCount: 1,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Black Bolt",
    color: "orange",
    cost: gemCost({ yellow: 7 }),
    avengerCount: 0,
    points: 4,
    hasTimeStone: true,
  },
  {
    name: "Thor",
    color: "red",
    cost: gemCost({ purple: 5, red: 3, blue: 3, yellow: 3 }),
    avengerCount: 2,
    points: 3,
    hasTimeStone: true,
  },
];