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
                vFact.options,
                compose2(fn, vFact.decoder)
            );
        }

        default: {
            return vFact;
        }
    }
}

export interface VFactsDict<Msg> {
    events?: VEventDict<Msg>;
    styles?: VStyleDict;
    properties?: VPropertyDict;
    attributes?: VAttributesDict;
}

export type VEventDict<Msg> = {
    [ string ]: VEvent<Msg>;
};

export type VStyleDict = VStyle;

export type VPropertyDict = {
    [ string ]: VProperty;
};

export const organize = <Msg>(vFacts: Array<VFact<Msg>>): VFactsDict<Msg> => {
    const dict: VFactsDict<Msg> = {};

    for (let vFact of vFacts) {
        switch (vFact.type) {
            case 'V_ATTRIBUTE': {
                dict.attributes = dict.attributes || {};
                dict.attributes[ vFact.key ] = vFact;

                break;
            }

            case 'V_EVENT': {
                dict.events = dict.events || {};
                dict.events[ vFact.key ] = vFact;

                break;
            }

            case 'V_PROPERTY': {
                dict.properties = dict.properties || {};
                dict.properties[ vFact.key ] = vFact;

                break;
            }

            case 'V_STYLE': {
                dict.styles = vFact;

                break;
            }

            default: (vFact: empty)
                throw 'unknown virtual fact';
        }
    }

    return dict;
};
