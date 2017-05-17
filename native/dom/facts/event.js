/* @flow */

/**
 * --- EVENT ---
 */

import {
    type VEvent,
    type VEventDict,
    type Value,
    type Options
} from '../../v-dom/v-facts/v-event';
import {
    type HypeHTMLElement,
    type HypeHandlers,
    type HypeHandler,
    type EventNode
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, eventNode: EventNode<Msg>, vEventDict: VEventDict<Msg>): void => {
    const allHandlers: HypeHandlers<Msg> = element.hypeHandlers || {};

    for (let key in vEventDict) {
        const prevHandler: ?HypeHandler<Msg> = allHandlers[ key ];
        const value: ?Value<Msg> = vEventDict[ key ];

        if (prevHandler) {
            if (value) {
                prevHandler.info = value;
            } else {
                element.removeEventListener(key, prevHandler);
                allHandlers[ key ] = undefined;
            }
        } else if (value) {
            const handler = makeEventHandler(eventNode, value);

            element.addEventListener(key, handler);
            allHandlers[ key ] = handler;
        }
    }
};

const makeEventHandler = <Msg>(eventNode: EventNode<Msg>, value: Value<Msg>): HypeHandler<Msg> => {
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

    eventHandler.info = value;

    return eventHandler;
};
