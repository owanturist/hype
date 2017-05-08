/* @flow */

import type {
    Event
} from './event';
import type {
    Style
} from './style';

export type Fact<Msg>
    = Event<Msg>
    | Style
    ;
