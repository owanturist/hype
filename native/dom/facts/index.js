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
    apply as applyAttributes
} from './attributes';
import {
    apply as applyEvents
} from './events';
import {
    apply as applyProperties
} from './properties';
import {
    apply as applyStyles
} from './styles';

/**
 * --- FACTS ---
 */

export const apply = <Msg>(element: HypeHTMLElement<Msg>, eventNode: EventNode<Msg>, vFactsDict: VFactsDict<Msg>): void => {
    if (vFactsDict.attributes) {
        applyAttributes(element, vFactsDict.attributes);
    }

    if (vFactsDict.events) {
        applyEvents(element, eventNode, vFactsDict.events);
    }

    if (vFactsDict.properties) {
        applyProperties(element, vFactsDict.properties);
    }

    if (vFactsDict.styles) {
        applyStyles(element, vFactsDict.styles);
    }
};
