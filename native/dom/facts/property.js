/* @flow */

/**
 * --- PROPERTY ---
 */

import {
    type VProperty
} from '../../v-dom/v-facts/v-property';

export const apply = (node: any, { key, value }: VProperty):void => {
    if (key !== 'value' || node.value !== value) {
        node[ key ] = value;
    }
};
