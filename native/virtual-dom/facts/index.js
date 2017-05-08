/* @flow */

import type {
    Event
} from './event';
import type {
    Style
} from './style';
import type {
    Property
} from './property';

export type Fact<Msg>
    = Event<Msg>
    | Style
    | Property
    ;
