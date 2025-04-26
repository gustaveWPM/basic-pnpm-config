import type { HelloMode } from '@me/shared-types/Hello';

import { helloModes } from '@me/shared-types/Hello';

const HELLO_MSG = 'Hello';

const MATCHING_TRANSFORMATIONS = {
  [helloModes.yellMode]: (string: string) => string.toUpperCase(),
  [helloModes.shyMode]: (string: string) => string.toLowerCase(),
  [helloModes.neutralMode]: (string: string) => string
} as const satisfies Record<HelloMode, (string: string) => string>;

export const sayHello = ({ mode }: { mode: HelloMode }) => console.log(MATCHING_TRANSFORMATIONS[mode](HELLO_MSG));
