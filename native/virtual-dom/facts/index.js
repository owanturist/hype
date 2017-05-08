/* @flow */

import type {
    Event
} from './event';
import {
    on
} from './event';
import type {
    Style
} from './style';
import type {
    Property
} from './property';
import type {
    Attribute
} from './attribute';

import {
    compose2
} from '../../utils/compose';

export type Fact<Msg>
    = Event<Msg>
    | Style
    | Property
    | Attribute
    ;

export const map = <T1, T2>(fn: (a: T1) => T2, fact: Fact<T1>): Fact<T2> => {
    switch (fact.type) {
        case 'EVENT': {
            return on(
                fact.key,
                fact.value.options,
                compose2(fn, fact.value.decoder)
            );
        }

        default: {
            return fact;
        }
    }
}
