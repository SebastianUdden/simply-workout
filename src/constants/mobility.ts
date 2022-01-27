import {
  ABS,
  BICEPS,
  CALVES,
  PECS,
  GLUTES,
  HAMSTRINGS,
  HIP,
  INNER_THIGH,
  SPINAL_ERECTOR,
  OBLIQUES,
  QUADS,
  DELTS,
  TRICEPS,
  UPPER_TRAPS,
  LOWER_TRAPS,
  LATS,
  LOWER_PECS,
} from "./areas";

export const MOBILITY = "mobility";
export const mobility = [
  {
    id: "301",
    category: MOBILITY,
    name: "toe touches",
    unit: "reps",
    areas: [HAMSTRINGS, CALVES, SPINAL_ERECTOR, LOWER_TRAPS],
  },
  {
    id: "302",
    category: MOBILITY,
    name: "hip flexor",
    unit: "sec",
    areas: [HIP, QUADS],
  },
  {
    id: "303",
    category: MOBILITY,
    name: "seated glute stretch",
    unit: "sec",
    areas: [GLUTES, SPINAL_ERECTOR, OBLIQUES],
  },
  {
    id: "304",
    category: MOBILITY,
    name: "seated diagonal back stretch",
    unit: "sec",
    areas: [],
  },
  {
    id: "305",
    category: MOBILITY,
    name: "wrist stretch",
    unit: "sec",
    areas: [],
  },
  {
    id: "306",
    category: MOBILITY,
    name: "seated glute stretch, leg backward",
    unit: "sec",
    areas: [],
  },
  {
    id: "307",
    category: MOBILITY,
    name: "quad stretch",
    unit: "sec",
    areas: [],
  },
  {
    id: "308",
    category: MOBILITY,
    name: "the frog",
    unit: "sec",
    areas: [],
  },
  {
    id: "309",
    category: MOBILITY,
    name: "half-split",
    unit: "sec",
    areas: [],
  },
  {
    id: "310",
    category: MOBILITY,
    name: "seated forward back stretch",
    unit: "sec",
    areas: [],
  },
  {
    id: "311",
    category: MOBILITY,
    name: "laying down stretch",
    unit: "sec",
    areas: [],
  },
  {
    id: "312",
    category: MOBILITY,
    name: "the cobra",
    unit: "sec",
    areas: [],
  },
  {
    id: "313",
    category: MOBILITY,
    name: "the cross",
    unit: "sec",
    areas: [],
  },
  {
    id: "314",
    category: MOBILITY,
    name: "shoulder stretch from all four",
    unit: "sec",
    areas: [],
  },
  {
    id: "315",
    category: MOBILITY,
    name: "downward facing dog",
    unit: "sec",
    areas: [],
  },
  {
    id: "316",
    category: MOBILITY,
    name: "seated elephant shoulder stretch",
    unit: "sec",
    areas: [],
  },
  {
    id: "317",
    category: MOBILITY,
    name: "russian squat",
    unit: "sec",
    areas: [],
  },
  {
    id: "318",
    category: MOBILITY,
    name: "half-lotus",
    unit: "sec",
    areas: [],
  },
  {
    id: "319",
    category: MOBILITY,
    name: "backward roll",
    unit: "sec",
    areas: [],
  },
  {
    id: "320",
    category: MOBILITY,
    name: "lie down and breathe",
    unit: "sec",
    areas: [],
  },
];
