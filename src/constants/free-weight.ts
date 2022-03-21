import {
  ABS,
  BICEPS,
  TRICEPS,
  PECS,
  GLUTES,
  HAMSTRINGS,
  OBLIQUES,
  QUADS,
  DELTS,
  UPPER_TRAPS,
  LOWER_TRAPS,
  SPINAL_ERECTOR,
  LATS,
  UPPER_PECS,
  LOWER_PECS,
  HIP,
  CALVES,
  FOREARMS,
  INNER_THIGH,
  RHOMBOIDS,
} from "./areas";

export const FREE_WEIGHT = "free weight";

export const freeWeight = [
  {
    id: "101",
    category: FREE_WEIGHT,
    name: "barbell bicep curl",
    unit: "kg",
    areas: [BICEPS, FOREARMS],
  },
  {
    id: "102",
    category: FREE_WEIGHT,
    name: "barbell bench press",
    unit: "kg",
    areas: [PECS, TRICEPS],
  },
  {
    id: "103",
    category: FREE_WEIGHT,
    name: "barbell incline bench press",
    unit: "kg",
    areas: [UPPER_PECS, TRICEPS],
  },
  {
    id: "104",
    category: FREE_WEIGHT,
    name: "barbell decline bench press",
    unit: "kg",
    areas: [LOWER_PECS, TRICEPS],
  },
  {
    id: "105",
    category: FREE_WEIGHT,
    name: "dumbbell standing overhead press",
    unit: "kg",
    areas: [DELTS, UPPER_PECS, TRICEPS, UPPER_TRAPS, LOWER_TRAPS],
  },
  {
    id: "107",
    category: FREE_WEIGHT,
    name: "single leg deadlift",
    unit: "kg",
    areas: [GLUTES, HAMSTRINGS, SPINAL_ERECTOR, ABS, OBLIQUES],
  },
  {
    id: "108",
    category: FREE_WEIGHT,
    name: "barbell deadlift",
    unit: "kg",
    areas: [SPINAL_ERECTOR, GLUTES, QUADS, HAMSTRINGS, LOWER_TRAPS, LATS],
  },
  {
    id: "109",
    category: FREE_WEIGHT,
    name: "barbell back squat",
    unit: "kg",
    areas: [SPINAL_ERECTOR, GLUTES, HAMSTRINGS, LATS],
  },
  {
    id: "110",
    category: FREE_WEIGHT,
    name: "dumbbell romanian deadlift",
    unit: "kg",
    areas: [SPINAL_ERECTOR, GLUTES, HAMSTRINGS],
  },
  {
    id: "111",
    category: FREE_WEIGHT,
    name: "kettlebell swing",
    unit: "kg",
    areas: [SPINAL_ERECTOR, GLUTES, HAMSTRINGS, HIP, ABS],
  },
  {
    id: "112",
    category: FREE_WEIGHT,
    name: "medicine ball slam",
    unit: "kg",
    areas: [ABS, BICEPS, TRICEPS, LATS, GLUTES, QUADS, HAMSTRINGS, CALVES],
  },
  {
    id: "113",
    category: FREE_WEIGHT,
    name: "t-bar row",
    unit: "kg",
    areas: [LATS, UPPER_TRAPS, LOWER_TRAPS, DELTS],
  },
  {
    id: "115",
    category: FREE_WEIGHT,
    name: "dumbbell farmers walk",
    unit: "kg",
    areas: [
      QUADS,
      HAMSTRINGS,
      GLUTES,
      CALVES,
      LATS,
      SPINAL_ERECTOR,
      UPPER_TRAPS,
      LOWER_TRAPS,
      ABS,
      BICEPS,
    ],
  },
  {
    id: "117",
    category: FREE_WEIGHT,
    name: "shrug",
    unit: "kg",
    areas: [UPPER_TRAPS],
  },
  {
    id: "119",
    category: FREE_WEIGHT,
    name: "dumbbell lateral raise",
    unit: "kg",
    areas: [DELTS, UPPER_TRAPS],
  },
  {
    id: "120",
    category: FREE_WEIGHT,
    name: "barbell overhead press",
    unit: "kg",
    areas: [PECS, DELTS, TRICEPS, UPPER_TRAPS, LOWER_TRAPS],
  },
  {
    id: "121",
    category: FREE_WEIGHT,
    name: "rear delt raises",
    unit: "kg",
    areas: [DELTS, LOWER_TRAPS],
  },
  {
    id: "122",
    category: FREE_WEIGHT,
    name: "half kneeling landmine press",
    unit: "kg",
    areas: [DELTS],
  },
  {
    id: "123",
    category: FREE_WEIGHT,
    name: "dumbbell bicep curl",
    unit: "kg",
    areas: [BICEPS, FOREARMS],
  },
  {
    id: "124",
    category: FREE_WEIGHT,
    name: "dumbbell bench press",
    unit: "kg",
    areas: [TRICEPS, PECS, DELTS],
  },
  {
    id: "125",
    category: FREE_WEIGHT,
    name: "dumbbell incline bench press",
    unit: "kg",
    areas: [UPPER_PECS, DELTS, TRICEPS],
  },
  {
    id: "126",
    category: FREE_WEIGHT,
    name: "dumbbell decline bench press",
    unit: "kg",
    areas: [LOWER_PECS, DELTS, TRICEPS],
  },
  {
    id: "128",
    category: FREE_WEIGHT,
    name: "calf raise",
    unit: "kg",
    areas: [CALVES],
  },
  {
    id: "129",
    category: FREE_WEIGHT,
    name: "weighted decline situp",
    unit: "kg",
    areas: [ABS, OBLIQUES, HIP, INNER_THIGH, LOWER_PECS],
  },
  {
    id: "130",
    category: FREE_WEIGHT,
    name: "dumbbell incline flye",
    unit: "kg",
    areas: [UPPER_PECS, DELTS],
  },
  {
    id: "131",
    category: FREE_WEIGHT,
    name: "dumbbell tricep extension",
    unit: "kg",
    areas: [TRICEPS],
  },
  {
    id: "132",
    category: FREE_WEIGHT,
    name: "barbell bent over row",
    unit: "kg",
    areas: [LOWER_TRAPS, RHOMBOIDS, LATS, DELTS, LOWER_PECS],
  },
  {
    id: "133",
    category: FREE_WEIGHT,
    name: "dumbbell incline bicep curl",
    unit: "kg",
    areas: [BICEPS],
  },
  {
    id: "134",
    category: FREE_WEIGHT,
    name: "barbell good morning",
    unit: "kg",
    areas: [HAMSTRINGS, GLUTES, SPINAL_ERECTOR, LOWER_TRAPS],
  },
  {
    id: "135",
    category: FREE_WEIGHT,
    name: "weighted hip thrust",
    unit: "kg",
    areas: [GLUTES, HAMSTRINGS],
  },
  {
    id: "136",
    category: FREE_WEIGHT,
    name: "rack pull",
    unit: "kg",
    areas: [
      GLUTES,
      HAMSTRINGS,
      SPINAL_ERECTOR,
      LATS,
      UPPER_TRAPS,
      LOWER_TRAPS,
      QUADS,
      FOREARMS,
    ],
  },
  {
    id: "137",
    category: FREE_WEIGHT,
    name: "reverse flye",
    unit: "kg",
    areas: [RHOMBOIDS, UPPER_TRAPS, DELTS],
  },
  {
    id: "138",
    category: FREE_WEIGHT,
    name: "dumbbell one arm row",
    unit: "kg",
    areas: [UPPER_TRAPS, LOWER_TRAPS, DELTS, BICEPS, HIP],
  },
];
