import {
  FULLBODY_A,
  FULLBODY_B,
  GYM_ROUTINE,
  MADCOW_1,
  MADCOW_2,
  MADCOW_3,
  MORNING_PUSHUPS,
  NEWBIE_A,
  NEWBIE_B,
  OUTSIDE_ROUTINE,
  STARTING_STRENGTH_A,
  STARTING_STRENGTH_B,
} from "./routines";

export const defaultPrograms = [
  {
    id: "1001",
    name: "Madcow",
    routines: [
      { day: 1, routine: MADCOW_1 },
      { day: 3, routine: MADCOW_2 },
      { day: 5, routine: MADCOW_3 },
    ],
  },
  {
    id: "1002",
    name: "Full body",
    routines: [
      { day: 1, routine: FULLBODY_A },
      { day: 4, routine: FULLBODY_B },
    ],
  },
  {
    id: "1003",
    name: "Newbie",
    routines: [
      { day: 1, routine: NEWBIE_A },
      { day: 3, routine: NEWBIE_B },
      { day: 5, routine: NEWBIE_A },
      { day: 8, routine: NEWBIE_B },
      { day: 10, routine: NEWBIE_A },
      { day: 12, routine: NEWBIE_B },
    ],
  },
  {
    id: "1004",
    name: "Starting strength",
    routines: [
      { day: 1, routine: STARTING_STRENGTH_A },
      { day: 3, routine: STARTING_STRENGTH_B },
      { day: 5, routine: STARTING_STRENGTH_A },
      { day: 8, routine: STARTING_STRENGTH_B },
      { day: 10, routine: STARTING_STRENGTH_A },
      { day: 12, routine: STARTING_STRENGTH_B },
    ],
  },
  {
    id: "1005",
    name: "Morning pushup challenge",
    routines: [
      { day: 1, routine: MORNING_PUSHUPS },
      { day: 2, routine: MORNING_PUSHUPS },
      { day: 3, routine: MORNING_PUSHUPS },
      { day: 4, routine: MORNING_PUSHUPS },
      { day: 5, routine: MORNING_PUSHUPS },
    ],
  },
  {
    id: "1006",
    name: "Gym program",
    routines: [
      { day: 1, routine: GYM_ROUTINE },
      { day: 4, routine: GYM_ROUTINE },
    ],
  },
  {
    id: "1007",
    name: "Summer fitness",
    routines: [
      { day: 1, routine: GYM_ROUTINE },
      { day: 2, routine: OUTSIDE_ROUTINE },
      { day: 4, routine: STARTING_STRENGTH_A },
      { day: 6, routine: STARTING_STRENGTH_B },
    ],
  },
];
