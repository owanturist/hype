/* @flow */

/**
 * --- EVENT ---
 */

import {
    type VEvent,
    type Options
} from '../../v-dom/v-facts/v-event';
import {
    type HypeHTMLElement,
    type HypeHandlers,
    type HypeHandler,
    type EventNode
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, eventNode: EventNode<Msg>, vEvent: VEvent<Msg>): void => {
    const allHandlers: HypeHandlers<Msg> = element.hypeHandlers || {};
    const prevHandler = allHandlers[ vEvent.key ];

    if (typeof vEvent === 'undefined') {
        element.removeEventListener(vEvent.key, prevHandler);
    } else if (typeof prevHandler === 'undefined') {
        const handler = makeEventHandler(eventNode, vEvent);

        element.addEventListener(vEvent.key, handler);
    } else {
        prevHandler.info = vEvent;
    }
};

const makeEventHandler = <Msg>(eventNode: EventNode<Msg>, vEvent: VEvent<Msg>): HypeHandler<Msg> => {
    const eventHandler = (event: Event):void => {
        const { decoder, options } = eventHandler.info;
        let msg: Msg = decoder(event);

        if (options.stopPropagation) {
            event.stopPropagation();
        }

        if (options.preventDefault) {
            event.preventDefault();
        }

        let currentEventNode = eventNode;

        while (currentEventNode) {
            msg = currentEventNode.tagger(msg);

            currentEventNode = currentEventNode.parent;
        }
    };

    eventHandler.info = vEvent;

    return eventHandler;
};
