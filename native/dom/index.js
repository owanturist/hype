/* @flow */

import {
    type VEvent
} from '../v-dom/v-facts/v-event';

export class HypeHTMLElement<Msg> extends HTMLElement {
    hypeHandlers: ?HypeHandlers<Msg>;
}

export type HypeHandler<Msg> = EventHandler & {
    info: VEvent<Msg>
};

export type HypeHandlers<Msg>  = {
    [ string ]: HypeHandler<Msg>;
};

export interface EventNode<Msg> {
    tagger: <A>(A) => Msg;
    parent: EventNode<Msg>;
}
