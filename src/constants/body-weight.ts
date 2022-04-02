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
  RHOMBOIDS,
} from "./areas";

export const BODY_WEIGHT = "body weight";
export const bodyWeight = [
  {
    id: "1",
    category: BODY_WEIGHT,
    name: "power walk (60 min)",
    unit: "km",
    img: "https://chefenikjol.files.wordpress.com/2010/09/powerwalk.jpg",
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
    img: "https://previews.123rf.com/images/takoburito/takoburito1612/takoburito161200004/68168078-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4-%EB%82%A8%EC%9E%90-%EC%8B%A4%ED%96%89.jpg",
    areas: [GLUTES, HAMSTRINGS, QUADS, CALVES, ABS, OBLIQUES],
  },
  {
    id: "3",
    category: BODY_WEIGHT,
    name: "pushup",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, ABS, LATS],
  },
  {
    id: "4",
    category: BODY_WEIGHT,
    name: "pullup",
    unit: "reps",
    areas: [PECS, DELTS, BICEPS, TRICEPS, SPINAL_ERECTOR, LATS, UPPER_TRAPS],
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
    name: "situp",
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
    name: "side crunch",
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
    name: "bird dog",
    unit: "sec",
    areas: [SPINAL_ERECTOR, ABS, GLUTES],
  },
  {
    id: "16",
    category: BODY_WEIGHT,
    name: "diamond pushup",
    unit: "reps",
    areas: [LOWER_PECS, DELTS, TRICEPS, ABS],
  },
  {
    id: "17",
    category: BODY_WEIGHT,
    name: "BOSU ball pushup",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, ABS, LATS],
  },
  {
    id: "18",
    category: BODY_WEIGHT,
    name: "punchers pushup",
    unit: "reps",
    areas: [PECS, DELTS, TRICEPS, SPINAL_ERECTOR, ABS, LATS],
  },
  {
    id: "19",
    category: BODY_WEIGHT,
    name: "TRX suspended pushup",
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
    name: "chinup",
    unit: "reps",
    areas: [PECS, DELTS, BICEPS, TRICEPS, SPINAL_ERECTOR, LATS],
  },
  {
    id: "25",
    category: BODY_WEIGHT,
    name: "running (60 min)",
    unit: "km",
    img: "https://previews.123rf.com/images/takoburito/takoburito1612/takoburito161200004/68168078-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4-%EB%82%A8%EC%9E%90-%EC%8B%A4%ED%96%89.jpg",
    areas: [GLUTES, HAMSTRINGS, QUADS, CALVES, ABS, OBLIQUES],
  },
  {
    id: "26",
    category: BODY_WEIGHT,
    name: "running (15 min)",
    unit: "km",
    img: "https://previews.123rf.com/images/takoburito/takoburito1612/takoburito161200004/68168078-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%ED%9C%98%ED%8A%B8%EB%8B%88%EC%8A%A4-%EB%82%A8%EC%9E%90-%EC%8B%A4%ED%96%89.jpg",
    areas: [GLUTES, HAMSTRINGS, QUADS, CALVES, ABS, OBLIQUES],
  },
  {
    id: "27",
    category: BODY_WEIGHT,
    name: "power walk (120 min)",
    unit: "km",
    img: "https://chefenikjol.files.wordpress.com/2010/09/powerwalk.jpg",
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
    id: "28",
    category: BODY_WEIGHT,
    name: "split squat",
    unit: "reps",
    areas: [QUADS, GLUTES],
  },
  {
    id: "29",
    category: BODY_WEIGHT,
    name: "crunch",
    unit: "reps",
    areas: [ABS, OBLIQUES, LOWER_PECS],
  },
  {
    id: "30",
    category: BODY_WEIGHT,
    name: "decline situp",
    unit: "kg",
    areas: [ABS, OBLIQUES, HIP, INNER_THIGH, LOWER_PECS],
  },
  {
    id: "31",
    category: BODY_WEIGHT,
    name: "inverted row",
    unit: "kg",
    areas: [
      PECS,
      DELTS,
      BICEPS,
      SPINAL_ERECTOR,
      LATS,
      RHOMBOIDS,
      UPPER_TRAPS,
      LOWER_TRAPS,
    ],
  },
];
