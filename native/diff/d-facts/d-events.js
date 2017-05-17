/* @flow */

import {
    type Value,
    type VEventsDict
} from '../../v-dom/v-facts/v-event';

const isEqual = <Msg>(left: ?Value<Msg>, right: ?Value<Msg>): boolean =>
    !!left && !!right &&
    left.decoder === right.decoder &&
    left.options.stopPropagation === right.options.stopPropagation &&
    left.options.preventDefault === right.options.preventDefault;

const diffRemove = <Msg>(prev: VEventsDict<Msg>): ?VEventsDict<Msg> => {
    let diff: ?VEventsDict<Msg>;

    for (let key in prev) {
        diff = diff || {};
        diff[ key ] = undefined;
    }

    return diff;
};

const diffUpdate = <Msg>(prev: VEventsDict<Msg>, next: VEventsDict<Msg>): ?VEventsDict<Msg> => {
    let diff: ?VEventsDict<Msg>;

    for (let key in prev) {
        if (key in next) {
            if (!isEqual(prev[ key ], next[ key ])) {
                diff = diff || {};
                diff[ key ] = next[ key ];
            }
        } else {
            diff = diff || {};
            diff[ key ] = undefined;
        }
    }

    return diff;
};

const diffCreate = <Msg>(acc: ?VEventsDict<Msg>, prev: VEventsDict<Msg>, next: VEventsDict<Msg>): ?VEventsDict<Msg> => {
    for (let key in next) {
        if (!(key in prev)) {
            acc = acc || {};
            acc[ key ] = next[ key ];
        }
    }

    return acc;
};

export const diff = <Msg>(prev: VEventsDict<Msg>, next: ?VEventsDict<Msg>): ?VEventsDict<Msg> => {
    if (!next) {
        return diffRemove(prev);
    }

    return diffCreate(
        diffUpdate(prev, next),
        prev,
        next
    );
};
