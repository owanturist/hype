/* @flow */

import {
    type Value,
    type VEventsDict,
    type VEventsDiffDict
} from '../../v-dom/v-facts/v-event';

const isEqual = <Msg>(left: Value<Msg>, right: Value<Msg>): boolean =>
    left.decoder === right.decoder &&
    left.options.stopPropagation === right.options.stopPropagation &&
    left.options.preventDefault === right.options.preventDefault;

const diffRemove = <Msg>(prev: VEventsDict<Msg>): ?VEventsDiffDict<Msg> => {
    let diff: ?VEventsDiffDict<Msg>;

    for (let key in prev) {
        diff = diff || {};
        diff[ key ] = undefined;
    }

    return diff;
};

const diffUpdate = <Msg>(prev: VEventsDict<Msg>, next: VEventsDict<Msg>): ?VEventsDiffDict<Msg> => {
    let diff: ?VEventsDiffDict<Msg>;

    for (let key in prev) {
        if (key in next) {
            if (!isEqual(prev[ key ], next[ key ])) {
                diff = diff || {};
                diff[ key ] = next[ key ];
            }

            delete next[ key ];
        } else {
            diff = diff || {};
            diff[ key ] = undefined;
        }
    }

    return diff;
};

const diffCreate = <Msg>(acc: ?VEventsDiffDict<Msg>, next: VEventsDict<Msg>): ?VEventsDiffDict<Msg> => {
    for (let key in next) {
        acc = acc || {};
        acc[ key ] = next[ key ];
    }

    return acc;
};

export const diff = <Msg>(prev: VEventsDict<Msg>, next: ?VEventsDict<Msg>): ?VEventsDiffDict<Msg> => {
    if (!next) {
        return diffRemove(prev);
    }

    return diffCreate(
        diffUpdate(prev, next),
        next
    );
};
