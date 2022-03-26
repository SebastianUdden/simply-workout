import { anim } from "./Animation";
import { animateBodyWeight } from "./positions-side/body-weight/animateBodyWeight";
import { animateFreeWeight } from "./positions-side/free-weight/animateFreeWeight";
import { animateMachine } from "./positions-side/machine/animateMachine";

const formatName = (name: string) => {
  const n = name.split("(")[0];
  const newName = n
    .trim()
    .split(" ")
    .map((word, i) =>
      i !== 0
        ? `${word[0].toUpperCase()}${word.toLowerCase().slice(1, word.length)}`
        : word.toLowerCase()
    )
    .join("");
  return newName;
};

export const animations: any = {
  ...animateBodyWeight,
  ...animateFreeWeight,
  ...animateMachine,
};

export const getAnimation = (name: string) => {
  const selected = animations[formatName(name)];
  if (!selected) return null;
  const { animation, ...rest } = selected;
  return {
    positions: anim(animation),
    ...rest,
  };
};
