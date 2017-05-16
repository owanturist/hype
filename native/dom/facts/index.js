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
        for (let key in vFactsDict.attributes) {
            applyAttribute(element, vFactsDict.attributes[ key ]);
        }
    }

    if (vFactsDict.events) {
        for (let key in vFactsDict.events) {
            applyEvent(element, eventNode, vFactsDict.events[ key ]);
        }
    }

    if (vFactsDict.properties) {
        for (let key in vFactsDict.properties) {
            applyProperty(element, vFactsDict.properties[ key ]);
        }
    }

    if (vFactsDict.styles) {
        applyStyle(element, vFactsDict.styles);
    }
};
