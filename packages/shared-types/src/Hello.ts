export const SAY_MODES = {
  neutral: 'N',
  yell: 'Y',
  shy: 'S'
} as const;

export type SayOptions = { mode: SayMode; msg?: string };

type SayMode = (typeof SAY_MODES)[keyof typeof SAY_MODES];
