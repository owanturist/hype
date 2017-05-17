/* @flow */

import {
    type VFact,
    type VFactsDict
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

export const apply = <Msg>(element: HypeHTMLElement<Msg>, eventNode: EventNode<Msg>, vFactsDict: VFactsDict<Msg>): void => {
    if (vFactsDict.attributes) {
        applyAttribute(element, vFactsDict.attributes);
    }

    if (vFactsDict.events) {
        applyEvent(element, eventNode, vFactsDict.events);
    }

    if (vFactsDict.properties) {
        applyProperty(element, vFactsDict.properties);
    }

    if (vFactsDict.styles) {
        applyStyle(element, vFactsDict.styles);
    }
};
