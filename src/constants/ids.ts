// BODYWEIGHT
const PUSHUP = "3";
const PULLUP = "4";
const SQUAT = "5";
const SITUP = "6";
const LEG_RAISE = "6";
const DIP = "7";
const PLANK = "9";
const SIDE_PLANK = "10";
const LUNGE = "11";
const GLUTE_BRIDGE = "13";
const BIRD_DOG = "15";
const CALF_RAISE = "21";
const CHINUP = "24";
// const RUNNING = "26";
const CRUNCH = "29";
const DECLINE_SITUP = "30";
const INVERTED_ROW = "31";

// BARBELL
const BARBELL_CURLS = "101";
const BENCH = "102";
const NARROW_BENCH = "140";
const INCLINE_BENCH = "103";
const DEADLIFT = "108";
const BB_SQUAT = "109";
const T_BAR_ROW = "113";
const PRESS = "120";
const ROW = "132";
const RACK_PULL = "136";
const FRONT_SQUAT = "139";
const GOOD_MORNING = "134";

// DUMBBELL
const DUMBBELL_PRESS = "105";
const ARNOLD_PRESS = DUMBBELL_PRESS;
const ROMANIAN_DEADLIFT = "110";
const DUMBBELL_LATERAL_RAISE = "119";
const DUMBBELL_CURL = "123";
const CONCENTRATION_CURL = DUMBBELL_CURL;
const DUMBBELL_BENCH = "124";
const INCLINE_FLYE = "130";
const DUMBBELL_TRICEP = "131";
const DUMBBELL_ROW = "138";

// MACHINE
const MACHINE_CURL = "201";
const MACHINE_SQUAT = "202";
const LAT_PULLDOWN = "210";

// SERIES
const DEADLIFTS = [DEADLIFT, ROMANIAN_DEADLIFT, RACK_PULL];
const BENCHS = [BENCH, INCLINE_BENCH, DUMBBELL_BENCH];
const SQUATS = [BB_SQUAT, FRONT_SQUAT, SQUAT];
const PRESSES = [PRESS, DUMBBELL_PRESS];
const PULL_UPS = [PULLUP, INVERTED_ROW, LAT_PULLDOWN];
const CURLS = [MACHINE_CURL, BARBELL_CURLS, DUMBBELL_CURL];
const ROWS = [ROW, INVERTED_ROW];
// const FLYES = [INCLINE_FLYE];
// const CLEANS = [BB_SQUAT];

// ARNOLD SERIES
export const arnoldsChest = [BENCH, INCLINE_BENCH, INCLINE_FLYE];
export const arnoldsBack = [T_BAR_ROW, ROW, DEADLIFT];
export const arnoldsArms = [
  BARBELL_CURLS,
  DUMBBELL_CURL,
  CONCENTRATION_CURL,
  NARROW_BENCH,
  DUMBBELL_TRICEP,
];
export const arnoldsShoulders = [
  ARNOLD_PRESS,
  DUMBBELL_PRESS,
  PRESS,
  DUMBBELL_LATERAL_RAISE,
];
export const arnoldsLegs = [BB_SQUAT, FRONT_SQUAT, DEADLIFT, GOOD_MORNING];
export const arnoldsAbs = [LEG_RAISE, SITUP, DECLINE_SITUP, CRUNCH];

export const home = [
  PUSHUP,
  SITUP,
  SQUAT,
  PLANK,
  GLUTE_BRIDGE,
  CALF_RAISE,
  SIDE_PLANK,
  BIRD_DOG,
];
export const outside = [
  PULLUP,
  CHINUP,
  DIP,
  INVERTED_ROW,
  LUNGE,
  SQUAT,
  CALF_RAISE,
];
export const odenplan = [
  DUMBBELL_BENCH,
  DUMBBELL_PRESS,
  DUMBBELL_LATERAL_RAISE,
  DUMBBELL_TRICEP,
  DUMBBELL_ROW,
  PULL_UPS,
  CURLS,
  MACHINE_SQUAT,
  PLANK,
  BENCH,
];
export const pushup = [PUSHUP];

export const newbieA = [SQUATS, BENCHS, ROWS];
export const newbieB = [DEADLIFTS, PULL_UPS, PRESSES];

export const startingStrengthA = [SQUATS, BENCHS, DEADLIFTS];
export const startingStrengthB = [SQUATS, PRESSES, PULL_UPS];

export const madcowMonday = [SQUATS, BENCHS, ROWS, BARBELL_CURLS];
export const madcowWednesday = [SQUATS, PRESSES, DEADLIFTS, PULL_UPS];
export const madcowFriday = [SQUATS, BENCHS, ROWS, INCLINE_BENCH];

export const wholebodyA = [SQUATS, BENCHS, DEADLIFTS.reverse(), ROWS];
export const wholebodyB = [DEADLIFTS, PRESSES, SQUATS, PULL_UPS];

export const arnold = [
  arnoldsChest,
  arnoldsBack,
  arnoldsArms,
  arnoldsShoulders,
  arnoldsLegs,
  arnoldsAbs,
];
