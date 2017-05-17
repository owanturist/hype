/* @flow */

import {
    type VHtml,
    type VNode,
    getDescendantsCount
} from '../v-dom/v-node';
import {
    type Patch,
    redraw,
    text,
    facts,
    removeLast,
    append
} from './patches';
import {
    diff as diffFacts
} from './d-facts';

export const diff = <Msg>(left: VHtml<Msg>, right: VHtml<Msg>): Array<Patch<Msg>> => {
    const patches = [];

    diffHelp(left, right, patches, 0);

    return patches;
};

export const diffChildren = <Msg>(leftParent: VNode<Msg>, rightParent: VNode<Msg>, patches: Array<Patch<Msg>>, rootIndex: number) => {
    const leftChildren = leftParent.children;
    const rightChildren = rightParent.children;
    const leftLength = leftChildren.length;
    const rightLength = rightChildren.length;

    if (leftLength > rightLength) {
        patches.push(
            removeLast(rootIndex, leftLength - rightLength)
        );
    } else if (leftLength < rightLength) {
        patches.push(
            append(rootIndex, rightChildren.slice(leftLength))
        );
    }

    let index = rootIndex;
    const minLength = leftLength < rightLength ? leftLength : rightLength;

    for (let i = 0; i < minLength; i++, index++) {
        const leftChild = leftChildren[ i ];

        diffHelp(leftChild, rightChildren[ i ], patches, index);
        index += getDescendantsCount(leftChild);
    }
};

const diffHelp = <Msg>(left: VHtml<Msg>, right: VHtml<Msg>, patches: Array<Patch<Msg>>, index: number): void => {
    if (left === right) {
        return;
    }

    const leftType = left.type;
    const rightType = right.type;

    if (leftType !== rightType) {
        patches.push(
            redraw(index, right)
        );
        return;
    }

    switch (right.type) {
        case 'V_MAP': {
            diffHelp(
                ((left: any): typeof right).html,
                right.html,
                patches,
                index + 1
            );

            return;
        }

        case 'V_NODE': {
            if (((left: any): typeof right).tagName !== right.tagName) {
                patches.push(
                    redraw(index, right)
                );

                return;
            }

            const factsDiff = diffFacts(
                ((left: any): typeof right).facts,
                right.facts
            );

            if (factsDiff) {
                patches.push(
                    facts(index, factsDiff)
                );
            }

            diffChildren(((left: any): typeof right), right, patches, index);

            return;
        }

        case 'V_TEXT': {
            if (((left: any): typeof right).text !== right.text) {
                patches.push(
                    text(index, right.text)
                );
            }

            return;
        }

        default: (right: empty)
            throw 'unknown virtual html';
    }
};
