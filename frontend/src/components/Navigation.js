import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const links = [
  {
    id: 0,
    path: "/",
    text: "HELLO!",
  },
  {
    id: 1,
    path: "/ourstory",
    text: "OUR STORY",
  },
  {
    id: 3,
    path: "/whatsgood",
    text: "WHATSGOOD",
  },
  {
    id: 4,
    path: "/ourfamily",
    text: "OURFAMILY",
  },
  {
    id: 5,
    path: "/findus",
    text: "WHERETOFINDUS",
  },
  {
    id: 6,
    path: "/hive",
    text: "HIVE",
  },
  {
    id: 7,
    path: "/videos",
    text: "VIDEOS",
  },
  {
    id: 8,
    path: "/callus",
    text: "CALLUS",
  },
];

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants}>
    {links.map((i) => (
      <MenuItem i={i} key={i.id} path={i.path} text={i.text} onClick={toggle} />
    ))}
  </motion.ul>
);
