/* @flow */

import {
    type Event,
    on
} from './event';
import {
    type Style
} from './style';
import {
    type Property
} from './property';
import {
    type Attribute
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

export const map = <A, Msg>(fn: A => Msg, fact: Fact<A>): Fact<Msg> => {
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
