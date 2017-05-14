/* @flow */

import {
    type VFact
} from '../../v-dom/v-facts';
import {
    type HypeHTMLElement,
    type EventNode
} from '..';
import {
    apply as applyAttribute
} from './attribute';
import {
    apply as applyEvent
} from './event';
import {
    apply as applyProperty
} from './property';
import {
    apply as applyStyle
} from './style';

/**
 * --- FACTS ---
 */

export const apply = <Msg>(element: HypeHTMLElement<Msg>, eventNode: EventNode<Msg>, vFacts: Array<VFact<Msg>>): void => {
    for (let vFact of vFacts) {
        switch (vFact.type) {
            case 'V_ATTRIBUTE': {
                applyAttribute(element, vFact);
                break;
            }

            case 'V_EVENT': {
                applyEvent(element, eventNode, vFact);
                break;
            }

            case 'V_PROPERTY': {
                applyProperty(element, vFact);
                break;
            }

            case 'V_STYLE': {
                applyStyle(element, vFact);
                break;
            }

            default: (vFact: empty)
                throw 'unknown v-fact';
        }
    }
};
