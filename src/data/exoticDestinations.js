import { img } from "./img";

export const exoticDestinations = [
  {
    id: "switzerland",
    name: "Switzerland",
    description:
      "Snow-capped peaks, glacial lakes, and storybook villages — experience the Alps at their most cinematic.",
    cities: ["Zurich", "Lucerne", "Interlaken", "Zermatt", "Geneva"],
    images: [
      img("1530122037265-a5f1f91d3b99", 900),
      img("1521292270410-a8c4d716d518", 900),
      img("1502786129293-79981df4e689", 900),
      img("1476514525535-07fb3b4ae5f1", 900),
      img("1500375592092-40eb2168fd21", 900),
    ],
    cta: "Explore Switzerland & the Alps",
  },
  {
    id: "thailand",
    name: "Thailand",
    description:
      "Golden temples, island-hopping, and street food worth crossing the world for — Thailand does it all.",
    cities: ["Bangkok", "Phuket", "Krabi", "Pattaya", "Chiang Mai"],
    images: [
      img("1552465011-b4e21bf6e79a", 900),
      img("1528181304800-259b08848526", 900),
      img("1587922546307-776227941871", 900),
      img("1509233725247-49e657c54213", 900),
      img("1518548419970-58e3b4079ab2", 900),
    ],
    cta: "Explore Thailand & the Islands",
  },
  {
    id: "australia",
    name: "Australia",
    description:
      "From the Sydney Opera House to the Great Barrier Reef — diverse landscapes and unforgettable adventures.",
    cities: ["Sydney", "Melbourne", "Gold Coast", "Cairns", "Perth"],
    images: [
      img("1506973035872-a4ec16b8e8d9", 900),
      img("1523482580672-f109ba8cb9be", 900),
      img("1523059623039-a9ed027e7fad", 900),
      img("1529108190281-9a4f620bc2d8", 900),
      img("1493558103817-58b2924bce98", 900),
    ],
    cta: "Explore Australia Down Under",
  },
];
