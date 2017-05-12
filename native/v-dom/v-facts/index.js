/* @flow */

import {
    type VEvent,
    vEvent
} from './v-event';
import {
    type VStyle
} from './v-style';
import {
    type VProperty
} from './v-property';
import {
    type VAttribute
} from './v-attribute';

import {
    compose2
} from '../../utils/compose';

export type VFact<Msg>
    = VEvent<Msg>
    | VStyle
    | VProperty
    | VAttribute
    ;

export const map = <A, Msg>(fn: A => Msg, vFact: VFact<A>): VFact<Msg> => {
    switch (vFact.type) {
        case 'V_EVENT': {
            return vEvent(
                vFact.key,
                vFact.value.options,
                compose2(fn, vFact.value.decoder)
            );
        }

        default: {
            return vFact;
        }
    }
}
