/* @flow */

import {
    type Value,
    type VPropertiesDict
} from '../../v-dom/v-facts/v-property';

const resetValue = (value: ?Value): ?string => typeof value === 'string' ? '' : null;

const diffRemove = (prev: VPropertiesDict): ?VPropertiesDict => {
    let diff;

    for (let key in prev) {
        diff = diff || {};
        diff[ key ] = resetValue(prev[ key ]);
    }

    return diff;
};

const diffUpdate = (prev: VPropertiesDict, next: VPropertiesDict): ?VPropertiesDict => {
    let diff;

    for (let key in prev) {
        if (key in next) {
            if (key === 'value' || prev[ key ] !== next[ key ]) {
                diff = diff || {};
                diff[ key ] = next[ key ];
            }

            delete next[ key ];
        } else {
            diff = diff || {};
            diff[ key ] = resetValue(prev[ key ]);
        }
    }

    return diff;
};

const diffCreate = (acc: ?VPropertiesDict, next: VPropertiesDict): ?VPropertiesDict => {
    for (let key in next) {
        acc = acc || {};
        acc[ key ] = next[ key ];
    }

    return acc;
};

export const diff = (prev: VPropertiesDict, next: ?VPropertiesDict): ?VPropertiesDict => {
    if (!next) {
        return diffRemove(prev);
    }

    return diffCreate(
        diffUpdate(prev, next),
        next
    );
};
