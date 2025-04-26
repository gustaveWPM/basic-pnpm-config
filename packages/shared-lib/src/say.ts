import type { SayOptions, HelloMode } from '@me/shared-types/Hello';

import { HELLO_MODES } from '@me/shared-types/Hello';

const MATCHING_TRANSFORMATIONS = {
  [HELLO_MODES.yell]: (string: string) => string.toUpperCase(),
  [HELLO_MODES.shy]: (string: string) => string.toLowerCase(),
  [HELLO_MODES.neutral]: (string: string) => string
} as const satisfies Record<HelloMode, (string: string) => string>;

export const say = ({ msg = '', mode }: SayOptions) => console.log(MATCHING_TRANSFORMATIONS[mode](msg));
