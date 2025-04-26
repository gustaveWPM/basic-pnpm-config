import { EHelloMode } from '@me/shared-types/Hello';
import { sayHello } from '@me/shared-lib/sayHello';

import { sayHi } from './lib/sayHi';

sayHello({ mode: EHelloMode.YELL });
sayHello({ mode: EHelloMode.NEUTRAL });
sayHello({ mode: EHelloMode.SHY });

sayHi({ mode: EHelloMode.NEUTRAL });
sayHi({ mode: EHelloMode.SHY });

// @ts-expect-error
sayHi({ mode: EHelloMode.YELL });
