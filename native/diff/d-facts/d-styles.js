/* @flow */

import {
    type VStylesDict
} from '../../v-dom/v-facts/v-style';

const diffRemove = (prev: VStylesDict): ?VStylesDict => {
    let diff;

    for (let property in prev) {
        diff = diff || {};
        diff[ property ] = '';
    }

    return diff;
};

const diffUpdate = (prev: VStylesDict, next: VStylesDict): ?VStylesDict => {
    let diff;

    for (let property in prev) {
        diff = diff || {};

        if (property in next) {
            diff[ property ] = next[ property ];
            delete next[ property ];
        } else {
            diff[ property ] = '';
        }
    }

    return diff;
};

const diffCreate = (acc: ?VStylesDict, next: VStylesDict): ?VStylesDict => {
    for (let property in next) {
        acc = acc || {};
        acc[ property ] = next[ property ];
    }

    return acc;
};

export const diff = (prev: VStylesDict, next: ?VStylesDict): ?VStylesDict => {
    if (!next) {
        return diffRemove(prev);
    }

    return diffCreate(
        diffUpdate(prev, next),
        next
    );
};
