import { helloModes } from '@me/shared-types/Hello';
import { sayHello } from '@me/shared-lib/sayHello';

import { sayHi } from './lib/sayHi';

sayHello({ mode: helloModes.yellMode });
sayHello({ mode: helloModes.neutralMode });
sayHello({ mode: helloModes.shyMode });

sayHi({ mode: helloModes.neutralMode });
sayHi({ mode: helloModes.shyMode });

// @ts-expect-error
sayHi({ mode: helloModes.yellMode });
