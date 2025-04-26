export const HELLO_MODES = {
  neutralMode: 'N',
  yellMode: 'Y',
  shyMode: 'S'
} as const;

export type HelloMode = (typeof HELLO_MODES)[keyof typeof HELLO_MODES];
