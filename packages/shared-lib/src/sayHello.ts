import type { HelloMode } from '@me/shared-types/Hello';

import { EHelloMode } from '@me/shared-types/Hello';

const HELLO_MSG = 'Hello';

const MATCHING_TRANSFORMATIONS = {
  [EHelloMode.YELL]: (string: string) => string.toUpperCase(),
  [EHelloMode.SHY]: (string: string) => string.toLowerCase(),
  [EHelloMode.NEUTRAL]: (string: string) => string
} as const satisfies Record<EHelloMode, (string: string) => string>;

export const sayHello = ({ mode }: { mode: HelloMode }) => console.log(MATCHING_TRANSFORMATIONS[mode](HELLO_MSG));
