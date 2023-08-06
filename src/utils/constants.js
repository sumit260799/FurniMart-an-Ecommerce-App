import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

import bed from "../assets/bed.png";
import sofa from "../assets/sofa.png";
import dyning from "../assets/dyning.png";
import recliner from "../assets/recliner.png";
import studytable from "../assets/studytable.png";
import chair from "../assets/chair.png";
import tvunit from "../assets/tv-unit.png";
import bookshelf from "../assets/bookshelf.png";
import lightning from "../assets/lightning.png";
import coffeetable from "../assets/coffeetable.png";
export const ExpFurnitures = [
  {
    id: 1,
    logo: bed,
    name: "beds",
  },
  {
    id: 2,
    logo: sofa,
    name: "sofas",
  },
  {
    id: 3,
    logo: dyning,
    name: "dining",
  },
  {
    id: 4,
    logo: recliner,
    name: "recliner",
  },
  {
    id: 5,
    logo: studytable,
    name: "studytable",
  },
  {
    id: 6,
    logo: chair,
    name: "chair",
  },
  {
    id: 7,
    logo: tvunit,
    name: "tvunit",
  },
  {
    id: 8,
    logo: bookshelf,
    name: "bookshelf",
  },
  {
    id: 9,
    logo: coffeetable,
    name: "coffeetable",
  },
  {
    id: 10,
    logo: lightning,
    name: "lightning",
  },
];

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    // icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    // icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    // icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products_url =
  "https://furnimart-ecommerce-app.netlify.app/.netlify/functions/airtable-product";

export const single_product_url = `https://furnimart-ecommerce-app.netlify.app/.netlify/functions/airtable-single-product?id=`;
