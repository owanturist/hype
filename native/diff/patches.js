/* @flow */

import {
    type VHtml
} from '../v-dom/v-node';
import {
    type VFactsDict
} from '../v-dom/v-facts';

export type Patch<Msg>
    = Redraw<Msg>
    | Tagger<any, Msg>
    | Text
    | Facts<Msg>
    | RemoveLast
    | Append<Msg>
    ;

export interface Redraw<Msg> {
    type: 'P_REDRAW';
    index: number;
    node: VHtml<Msg>;
}

export const redraw = <Msg>(index: number, node: VHtml<Msg>): Redraw<Msg> => ({
    type: 'P_REDRAW',
    index,
    node
});

export interface Tagger<A, Msg> {
    type: 'P_TAGGER';
    index: number;
    fn: A => Msg;
}

export const tagger = <A, Msg>(index: number, fn: A => Msg): Tagger<A, Msg> => ({
    type: 'P_TAGGER',
    index,
    fn
});

export interface Text {
    type: 'P_TEXT';
    index: number;
    value: string;
}

export const text = (index: number, value: string): Text => ({
    type: 'P_TEXT',
    index,
    value
});

export interface Facts<Msg> {
    type: 'P_TEXT';
    index: number;
    diff: VFactsDict<Msg>;
}

export const facts = <Msg>(index: number, diff: VFactsDict<Msg>): Facts<Msg> => ({
    type: 'P_TEXT',
    index,
    diff
});

export interface RemoveLast {
    type: 'P_REMOVE_LAST';
    index: number;
    amount: number;
}

export const removeLast = (index: number, amount: number): RemoveLast => ({
    type: 'P_REMOVE_LAST',
    index,
    amount
});

export interface Append<Msg> {
    type: 'P_APPEND';
    index: number;
    nodes: Array<VHtml<Msg>>;
}

export const append = <Msg>(index: number, nodes: Array<VHtml<Msg>>): Append<Msg> => ({
    type: 'P_APPEND',
    index,
    nodes
});
