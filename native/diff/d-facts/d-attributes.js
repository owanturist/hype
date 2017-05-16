/* @flow */

import {
    type VAttributesDict
} from '../../v-dom/v-facts/v-attribute';

const diffRemoveAttributes = (prev: VAttributesDict): ?VAttributesDict => {
    let diff: ?VAttributesDict;

    for (let key in prev) {
        diff = diff || {};
        diff[ key ] = undefined;
    }

    return diff;
};

const diffUpdateAttributes = (prev: VAttributesDict, next: VAttributesDict): ?VAttributesDict => {
    let diff: ?VAttributesDict;

    for (let key in prev) {
        diff = diff || {};
        diff[ key ] = (key in next) ? next[ key ] : undefined;
    }

    return diff;
};

const diffCreateAttributes = (acc: ?VAttributesDict, prev: VAttributesDict, next: VAttributesDict): ?VAttributesDict => {
    for (let key in next) {
        if (!(key in prev)) {
            acc = acc || {};
            acc[ key ] = next[ key ];
        }
    }

    return acc;
}

const diffAttributes = (prev: VAttributesDict, next: ?VAttributesDict): ?VAttributesDict => {
    if (!next) {
        return diffRemoveAttributes(prev);
    }

    return diffCreateAttributes(
        diffUpdateAttributes(prev, next),
        prev,
        next
    );
};
