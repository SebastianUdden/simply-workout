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

export const BODY_WEIGHT = "body weight";
export const bodyWeight = [
  {
    id: "1",
    category: BODY_WEIGHT,
    name: "power walk (60 min)",
    unit: "km",
    areas: [
      GLUTES,
      HAMSTRINGS,
      QUADS,
      CALVES,
      ABS,
      OBLIQUES,
      DELTS,
      UPPER_TRAPS,
    ],
  },
  {
    id: "2",
    category: BODY_WEIGHT,
    name: "running (30 min)",
    unit: "km",
    areas: [GLUTES, HAMSTRINGS, QUADS, CALVES, ABS, OBLIQUES],
  },
  {
    id: "3",
    category: BODY_WEIGHT,
    name: "push-up",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, ABS, LATS],
  },
  {
    id: "4",
    category: BODY_WEIGHT,
    name: "pull-up",
    unit: "reps",
    areas: [PECS, DELTS, BICEPS, TRICEPS, SPINAL_ERECTOR, LATS],
  },
  {
    id: "5",
    category: BODY_WEIGHT,
    name: "squat",
    unit: "reps",
    areas: [GLUTES, QUADS, HAMSTRINGS, INNER_THIGH, CALVES, HIP],
  },
  {
    id: "6",
    category: BODY_WEIGHT,
    name: "sit-up",
    unit: "reps",
    areas: [ABS, OBLIQUES, HIP, LOWER_PECS, UPPER_TRAPS],
  },
  {
    id: "7",
    category: BODY_WEIGHT,
    name: "dip",
    unit: "reps",
    areas: [LOWER_PECS, DELTS, TRICEPS],
  },
  {
    id: "8",
    category: BODY_WEIGHT,
    name: "side sit-up",
    unit: "reps",
    areas: [ABS, OBLIQUES, LATS, LOWER_PECS, UPPER_TRAPS],
  },
  {
    id: "9",
    category: BODY_WEIGHT,
    name: "plank",
    unit: "sec",
    areas: [ABS, OBLIQUES, SPINAL_ERECTOR, DELTS],
  },
  {
    id: "10",
    category: BODY_WEIGHT,
    name: "side plank",
    unit: "sec",
    areas: [ABS, OBLIQUES, LATS, SPINAL_ERECTOR, DELTS, TRICEPS],
  },
  {
    id: "11",
    category: BODY_WEIGHT,
    name: "lunge",
    unit: "reps",
    areas: [GLUTES, QUADS, HAMSTRINGS, CALVES, HIP],
  },
  {
    id: "12",
    category: BODY_WEIGHT,
    name: "burpee",
    unit: "reps",
    areas: [
      PECS,
      TRICEPS,
      DELTS,
      GLUTES,
      QUADS,
      CALVES,
      HIP,
      ABS,
      OBLIQUES,
      SPINAL_ERECTOR,
    ],
  },
  {
    id: "13",
    category: BODY_WEIGHT,
    name: "glute bridge",
    unit: "reps",
    areas: [GLUTES, ABS, HAMSTRINGS],
  },
  {
    id: "14",
    category: BODY_WEIGHT,
    name: "swiss ball rollout",
    unit: "reps",
    areas: [ABS, OBLIQUES, SPINAL_ERECTOR, DELTS, LOWER_TRAPS],
  },
  {
    id: "15",
    category: BODY_WEIGHT,
    name: "the bird dog aka one-arm, one-leg plank",
    unit: "sec",
    areas: [SPINAL_ERECTOR, ABS, GLUTES],
  },
  {
    id: "16",
    category: BODY_WEIGHT,
    name: "diamond push-up",
    unit: "reps",
    areas: [LOWER_PECS, DELTS, TRICEPS, ABS],
  },
  {
    id: "17",
    category: BODY_WEIGHT,
    name: "BOSU ball push-up",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, ABS, LATS],
  },
  {
    id: "18",
    category: BODY_WEIGHT,
    name: "punchers push-up",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, SPINAL_ERECTOR, ABS, LATS],
  },
  {
    id: "19",
    category: BODY_WEIGHT,
    name: "TRX suspended push-up",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, ABS, LATS],
  },
  {
    id: "20",
    category: BODY_WEIGHT,
    name: "bulgarian split squat",
    unit: "reps",
    areas: [QUADS, GLUTES],
  },
  {
    id: "21",
    category: BODY_WEIGHT,
    name: "calf raise",
    unit: "reps",
    areas: [CALVES],
  },
  {
    id: "22",
    category: BODY_WEIGHT,
    name: "barbell ab rollout",
    unit: "reps",
    areas: [ABS, OBLIQUES, DELTS, SPINAL_ERECTOR],
  },
  {
    id: "23",
    category: BODY_WEIGHT,
    name: "jackknife situp",
    unit: "reps",
    areas: [ABS],
  },
  {
    id: "24",
    category: BODY_WEIGHT,
    name: "chin-up",
    unit: "reps",
    areas: [PECS, DELTS, BICEPS, TRICEPS, SPINAL_ERECTOR, LATS],
  },
  {
    id: "25",
    category: BODY_WEIGHT,
    name: "running (60 min)",
    unit: "km",
    areas: [GLUTES, HAMSTRINGS, QUADS, CALVES, ABS, OBLIQUES],
  },
  {
    id: "26",
    category: BODY_WEIGHT,
    name: "running (15 min)",
    unit: "km",
    areas: [GLUTES, HAMSTRINGS, QUADS, CALVES, ABS, OBLIQUES],
  },
  {
    id: "27",
    category: BODY_WEIGHT,
    name: "power walk (120 min)",
    unit: "km",
    areas: [
      GLUTES,
      HAMSTRINGS,
      QUADS,
      CALVES,
      ABS,
      OBLIQUES,
      DELTS,
      UPPER_TRAPS,
    ],
  },
];
