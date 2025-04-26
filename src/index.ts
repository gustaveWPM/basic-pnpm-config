import { HELLO_MODES } from '@me/shared-types/Hello';
import { sayHello } from '@me/shared-lib/sayHello';

import { sayHi } from './lib/sayHi';

const { neutralMode, yellMode, shyMode } = HELLO_MODES;

sayHello({ mode: yellMode });
sayHello({ mode: neutralMode });
sayHello({ mode: shyMode });

sayHi({ mode: neutralMode });
sayHi({ mode: shyMode });

// @ts-expect-error
sayHi({ mode: yellMode });
