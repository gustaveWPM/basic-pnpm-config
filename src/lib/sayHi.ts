import type { SayOptions, SAY_MODES } from '@me/shared-types/Hello';

import { say } from '@me/shared-lib/say';

// * ... Since people who says "hi" are the most polite, the compiler would be surprised if we ask to yell here

interface ISayHiAvailableModes extends SayOptions {
  mode: Exclude<SayOptions['mode'], typeof SAY_MODES.yell>;
}

export const sayHi = ({ mode }: ISayHiAvailableModes) => say({ msg: 'Hi', mode });
