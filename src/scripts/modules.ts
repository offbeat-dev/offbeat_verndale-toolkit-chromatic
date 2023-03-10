import type { Organism } from "@verndale/core";

const modules: Organism[] = [
  {
    name: "accordion",
    loader: () => import("./modules/accordion"),
  },
];

export default modules;
