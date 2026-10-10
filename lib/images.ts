/*
  Photography used across the site. Every image is freely licensed from
  Wikimedia Commons and re-encoded to .webp in /public/images. Licences that
  require attribution are credited on /credits — keep `credit` accurate when
  swapping a photo, or replace it with the community's own photography.
*/

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
  credit: string
  license: string
  source: string
}

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`

export const photos = {
  heroDancers: {
    src: "/images/hero-dancers.webp",
    alt: "Igbo cultural troupe in red-and-white caps and coral beads, playing the drum and ọja flute",
    width: 1600,
    height: 1137,
    credit: "OPNPhotography",
    license: "CC BY 4.0",
    source: commons("Igbo_Cultural_Dancers_01.jpg"),
  },
  redCapChiefs: {
    src: "/images/red-cap-chiefs.webp",
    alt: "Red-cap chiefs in white robes gathered at an Igbo traditional ceremony",
    width: 1080,
    height: 720,
    credit: "Johnnybam",
    license: "CC BY-SA 4.0",
    source: commons("Red_Cap_Chiefs_at_an_Igbo_Traditional_Ceremony.jpg"),
  },
  landAerial: {
    src: "/images/land-aerial.webp",
    alt: "Aerial view of green, level farmland and homesteads in Enugu State",
    width: 1600,
    height: 1066,
    credit: "Ifeanyichukwu",
    license: "CC BY 4.0",
    source: commons("Area_drone_view_of_Achi_1.jpg"),
  },
  river: {
    src: "/images/river.webp",
    alt: "A wide river with sandy banks and forest beyond, in Enugu State",
    width: 800,
    height: 1067,
    credit: "Bright Isani",
    license: "CC BY-SA 4.0",
    source: commons("MABOLO_RIVER_IN_OGURUGU_ENUGU_STATE_NIGERIA.jpg"),
  },
  farmRidges: {
    src: "/images/farm-ridges.webp",
    alt: "Freshly made farm ridges of red earth ready for planting",
    width: 1100,
    height: 733,
    credit: "Sasu photography",
    license: "CC BY-SA 4.0",
    source: commons("Farming_Ridges.jpg"),
  },
  basdenMarket: {
    src: "/images/basden-market.webp",
    alt: "Early twentieth-century photograph of a crowded Igbo market",
    width: 1400,
    height: 858,
    credit: "George T. Basden",
    license: "Public domain",
    source: commons("Basden_Igbo_market.jpg"),
  },
  mmanwu: {
    src: "/images/mmanwu.webp",
    alt: "A Mmanwu masquerade in red and raffia costume moving through a crowd",
    width: 667,
    height: 1000,
    credit: "Nsofor1",
    license: "CC BY-SA 4.0",
    source: commons("Mmanwu_Masquerade.jpg"),
  },
  ikenga: {
    src: "/images/ikenga.webp",
    alt: "Carved wooden Ikenga figure with tall horns",
    width: 398,
    height: 900,
    credit: "14GTR",
    license: "CC0",
    source: commons("Ikenga_figure,_British_Museum.jpg"),
  },
  ogene: {
    src: "/images/ogene.webp",
    alt: "A double iron ogene bell",
    width: 750,
    height: 1000,
    credit: "Mplanetech",
    license: "CC BY-SA 4.0",
    source: commons("Ogene.jpg"),
  },
  udu: {
    src: "/images/udu.webp",
    alt: "A dark clay pot resting on stone",
    width: 750,
    height: 1000,
    credit: "Kid Keen 47",
    license: "CC BY-SA 4.0",
    source: commons("Clay_pot_2.jpg"),
  },
  kola: {
    src: "/images/kola.webp",
    alt: "Red and white kola nuts, some split open",
    width: 1000,
    height: 661,
    credit: "Azekhoria benjamin",
    license: "CC BY-SA 4.0",
    source: commons("Kolanuts.jpeg"),
  },
  igboFamily: {
    src: "/images/igbo-family.webp",
    alt: "An Igbo family in traditional attire, with red caps, coral beads and head wraps",
    width: 1128,
    height: 748,
    credit: "Jerry Emeka Obi",
    license: "CC BY-SA 4.0",
    source: commons("Igbo_family_in_traditional_attire.jpg"),
  },
  igboUkwuBronze: {
    src: "/images/igbo-ukwu-bronze.webp",
    alt: "Ninth-century Igbo-Ukwu bronze staff head, coiled with ornate detail",
    width: 734,
    height: 1000,
    credit: "Ochiwar",
    license: "CC BY-SA 3.0",
    source: commons("Bronze_ornamental_staff_head,_9th_century,_Igbo-Ukwu.JPG"),
  },
} satisfies Record<string, Photo>
