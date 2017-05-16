/* @flow */

import {
    type VFact,
    type VFactsDict,
    organize as organizeFacts
} from './v-facts';

/**
 * --- VIRTUAL HTML ---
 */

export type VHtml<Msg>
    = VMap<any, Msg>
    | VNode<Msg>
    | VText
    ;

/* --- Virtual Map --- */

export interface VMap<A, Msg> {
    type: 'V_MAP';
    tagger: A => Msg;
    html: VHtml<A>;
}

export const vMap = <A, Msg>(tagger: A => Msg, html: VHtml<A>): VMap<A, Msg> => ({
    type: 'V_MAP',
    tagger,
    html
});

/* --- Virtual Node */

export interface VNode<Msg> {
    type: 'V_NODE';
    tagName: string;
    facts: VFactsDict<Msg>;
    children: Array<VHtml<Msg>>;
}

export const vNode = <Msg>(tagName: string, facts: Array<VFact<Msg>>, children: Array<VHtml<Msg>>): VNode<Msg> => ({
    type: 'V_NODE',
    tagName,
    facts: organizeFacts(facts),
    children
});

/* --- Virtual Text */

export interface VText {
    type: 'V_TEXT';
    text: string;
}

export const vText = (text: string): VText => ({
    type: 'V_TEXT',
    text
});
