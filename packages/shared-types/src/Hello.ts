const neutralMode = Symbol();
const yellMode = Symbol();
const shyMode = Symbol();

export const helloModes = {
  neutralMode,
  yellMode,
  shyMode
} as const;

export type HelloMode = (typeof helloModes)[keyof typeof helloModes];
