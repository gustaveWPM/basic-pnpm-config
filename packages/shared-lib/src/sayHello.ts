import type { SayOptions } from '@me/shared-types/Hello';

import { say } from './say';

export const sayHello = ({ mode }: SayOptions) => say({ msg: 'Hello', mode });
