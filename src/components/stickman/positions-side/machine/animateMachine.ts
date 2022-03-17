import { latPulldownHigh, latPulldownLow } from "./latPullDown";
import { bicepCurlHigh, bicepCurlLow, bicepCurlMiddle } from "./bicepCurl";

export const latPulldown = {
  duration: 3,
  animation: [latPulldownLow, latPulldownHigh, latPulldownLow],
  prop: "pulldown",
  hands: "machine-bar",
};
export const bicepCurl = {
  duration: 3,
  animation: [
    bicepCurlLow,
    bicepCurlMiddle,
    bicepCurlHigh,
    bicepCurlMiddle,
    bicepCurlLow,
  ],
  prop: "curl-bench",
  hands: "barbell",
};

export const animateMachine = {
  latPulldown,
  bicepCurl,
};
