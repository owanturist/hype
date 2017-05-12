/* @flow */

import type {
    Fact
} from './facts';

/**
 * --- NODES ---
 */

export type Node<Msg>
    = Map<any, Msg>
    | Tag<Msg>
    | Text
    ;

export interface Map<A, Msg> {
    type: 'MAP';
    tagger: A => Msg;
    node: Node<A>;
}

export const map = <A, Msg>(tagger: A => Msg, node: Node<A>): Map<A, Msg> => ({
    type: 'MAP',
    tagger,
    node
});

export interface Tag<Msg> {
    type: 'TAG';
    tagName: string;
    facts: Array<Fact<Msg>>;
    children: Array<Node<Msg>>;
}

export const tag = (tagName: string) => <Msg>(facts: Array<Fact<Msg>>, children: Array<Node<Msg>>): Tag<Msg> => ({
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
