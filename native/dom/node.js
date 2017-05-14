/* @flow */

import {
    type VHtml
} from '../v-dom/v-node';
import {
    type HypeHTMLElement,
    type EventNode
} from './';
import {
    apply as applyFacts
} from './facts';

type ElementFactoryCache = {
    [ string ]: HTMLElement;
};

const createElementFactory = () => {
    const cache: ElementFactoryCache = {};

    return (tagName: string): Node => {
        let cachedElement = cache[ tagName ];

        if (typeof cachedElement === 'undefined') {
            cachedElement = cache[ tagName ] = document.createElement(tagName);
        }

        return cachedElement.cloneNode(false);
    }
};

const elementFactory = createElementFactory();

export const render = <Msg>(vHtml: VHtml<Msg>, eventNode: EventNode<Msg>): Node => {
    switch (vHtml.type) {
        case 'V_MAP': {
            const subEventNode = {
                tagger: vHtml.tagger,
                parent: eventNode
            };
            const element: any = render(vHtml.html, subEventNode);

            element.hypeEventNodeRef = subEventNode;

            return element;
        }

        case 'V_NODE': {
            const element: any = elementFactory(vHtml.tagName);

            applyFacts(element, eventNode, vHtml.facts);

            for (let child of vHtml.children) {
                element.appendChild(
                    render(child, eventNode)
                );
            }

            return element;
        }

        case 'V_TEXT': {
            return document.createTextNode(vHtml.text);
        }

        default: (vHtml: empty)
            throw 'unknown v-html';
    }
};
