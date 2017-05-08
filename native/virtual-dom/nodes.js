/* @flow */

import type {
    Fact
} from './facts';

/**
 * --- NODES ---
 */

export type Node<Msg>
    = Tag<Msg>
    | Text
    ;

export interface Tag<Msg> {
    type: 'TAG';
    tagName: string;
    facts: Array<Fact<Msg>>;
    children: Array<Node<Msg>>;
}

export const tag = <Msg>(tagName: string, facts: Array<Fact<Msg>>, children: Array<Node<Msg>>): Tag<Msg> => ({
    type: 'TAG',
    tagName,
    facts,
    children
});

export interface Text {
    type: 'TEXT';
    text: string;
}

export const text = (text: string): Text => ({
    type: 'TEXT',
    text
});
