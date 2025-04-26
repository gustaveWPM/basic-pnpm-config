import type { helloModes, HelloMode } from '@me/shared-types/Hello';

import { sayHello } from '@me/shared-lib/sayHello';

// * ... Since people who says "hi" are the most polite, the compiler would be surprise if we ask to yell here
type SayHiAvailableModes = Exclude<HelloMode, typeof helloModes.yellMode>;

export const sayHi = (params: { mode: SayHiAvailableModes }) => sayHello(params);
