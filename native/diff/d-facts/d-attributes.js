/* @flow */

import {
    type VAttributesDict
} from '../../v-dom/v-facts/v-attribute';

const diffRemove = (prev: VAttributesDict): ?VAttributesDict => {
    let diff;

    for (let key in prev) {
        diff = diff || {};
        diff[ key ] = undefined;
    }

    return diff;
};

const diffUpdate = (prev: VAttributesDict, next: VAttributesDict): ?VAttributesDict => {
    let diff;

    for (let key in prev) {
        if (key in next) {
            if (key === 'value' || prev[ key ] !== next[ key ]) {
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

const diffCreate = (acc: ?VAttributesDict, prev: VAttributesDict, next: VAttributesDict): ?VAttributesDict => {
    for (let key in next) {
        if (!(key in prev)) {
            acc = acc || {};
            acc[ key ] = next[ key ];
        }
    }

    return acc;
};

export const diff = (prev: VAttributesDict, next: ?VAttributesDict): ?VAttributesDict => {
    if (!next) {
        return diffRemove(prev);
    }

    return diffCreate(
        diffUpdate(prev, next),
        prev,
        next
    );
};
