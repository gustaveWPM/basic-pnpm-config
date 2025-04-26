import { HELLO_MODES } from '@me/shared-types/Hello';
import { sayHello } from '@me/shared-lib/sayHello';

import { sayHi } from './lib/sayHi';

const { neutral, yell, shy } = HELLO_MODES;

sayHello({ mode: yell });
sayHello({ mode: neutral });
sayHello({ mode: shy });

sayHi({ mode: neutral });
sayHi({ mode: shy });

// @ts-expect-error
sayHi({ mode: yell });
