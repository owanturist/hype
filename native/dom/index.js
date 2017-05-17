/* @flow */

import {
    type Value as VEventValue
} from '../v-dom/v-facts/v-event';

export class HypeHTMLElement<Msg> extends HTMLElement {
    hypeHandlers: ?HypeHandlers<Msg>;
}

export type HypeHandler<Msg> = EventHandler & {
    info: VEventValue<Msg>
};

export type HypeHandlers<Msg>  = {
    [ key: string ]: ?HypeHandler<Msg>;
};

export interface EventNode<Msg> {
    tagger: <A>(A) => Msg;
    parent: EventNode<Msg>;
}
