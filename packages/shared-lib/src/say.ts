import type { SayOptions } from '@me/shared-types/Hello';

import { SAY_MODES } from '@me/shared-types/Hello';

const MATCHING_TRANSFORMATIONS = {
  [SAY_MODES.yell]: (string: string) => string.toUpperCase(),
  [SAY_MODES.shy]: (string: string) => string.toLowerCase(),
  [SAY_MODES.neutral]: (string: string) => string
} as const satisfies Record<SayOptions['mode'], (string: string) => string>;

export const say = ({ msg = '', mode }: SayOptions) => console.log(MATCHING_TRANSFORMATIONS[mode](msg));
