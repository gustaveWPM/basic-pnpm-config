import type { HelloMode } from '@me/shared-types/Hello';

import { HELLO_MODES } from '@me/shared-types/Hello';

const HELLO_MSG = 'Hello';

const MATCHING_TRANSFORMATIONS = {
  [HELLO_MODES.yellMode]: (string: string) => string.toUpperCase(),
  [HELLO_MODES.shyMode]: (string: string) => string.toLowerCase(),
  [HELLO_MODES.neutralMode]: (string: string) => string
} as const satisfies Record<HelloMode, (string: string) => string>;

export const sayHello = ({ mode }: { mode: HelloMode }) => console.log(MATCHING_TRANSFORMATIONS[mode](HELLO_MSG));
