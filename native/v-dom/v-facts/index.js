/* @flow */

import {
    type VEvent,
    type VEventsDict,
    vEvent
} from './v-event';
import {
    type VStyle,
    type VStylesDict
} from './v-style';
import {
    type VProperty,
    type VPropertiesDict
} from './v-property';
import {
    type VAttribute,
    type VAttributesDict
} from './v-attribute';

import {
    compose2
} from '../../utils/compose';

/**
 * --- VIRTUAL FACTS ---
 */

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

export interface VFactsDict<Msg> {
    events?: VEventsDict<Msg>;
    styles?: VStylesDict;
    properties?: VPropertiesDict;
    attributes?: VAttributesDict;
}

export const organize = <Msg>(vFacts: Array<VFact<Msg>>): VFactsDict<Msg> => {
    const dict: VFactsDict<Msg> = {};

    for (let vFact of vFacts) {
        switch (vFact.type) {
            case 'V_ATTRIBUTE': {
                dict.attributes = dict.attributes || {};
                dict.attributes[ vFact.key ] = vFact.value;

                break;
            }

            case 'V_EVENT': {
                dict.events = dict.events || {};
                dict.events[ vFact.key ] = vFact.value;

                break;
            }

            case 'V_PROPERTY': {
                dict.properties = dict.properties || {};
                dict.properties[ vFact.key ] = vFact.value;

                break;
            }

            case 'V_STYLE': {
                dict.styles = {};

                for (let [ property, value ] of vFact.value) {
                    dict.styles[ property ] = value;
                }

                break;
            }

            default: (vFact: empty)
                throw 'unknown virtual fact';
        }
    }

    return dict;
};
