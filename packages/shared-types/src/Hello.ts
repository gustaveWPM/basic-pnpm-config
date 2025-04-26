export const HELLO_MODES = {
  neutral: 'N',
  yell: 'Y',
  shy: 'S'
} as const;

export type HelloMode = (typeof HELLO_MODES)[keyof typeof HELLO_MODES];
