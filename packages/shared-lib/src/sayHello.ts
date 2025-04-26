import type { HelloMode } from '@me/shared-types/Hello';

import { HELLO_MODES } from '@me/shared-types/Hello';

const HELLO_MSG = 'Hello';

const MATCHING_TRANSFORMATIONS = {
  [HELLO_MODES.yell]: (string: string) => string.toUpperCase(),
  [HELLO_MODES.shy]: (string: string) => string.toLowerCase(),
  [HELLO_MODES.neutral]: (string: string) => string
} as const satisfies Record<HelloMode, (string: string) => string>;

export const sayHello = ({ mode }: { mode: HelloMode }, __HELLO_MSG = HELLO_MSG) => console.log(MATCHING_TRANSFORMATIONS[mode](__HELLO_MSG));
