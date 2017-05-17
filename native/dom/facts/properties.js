/* @flow */

/**
 * --- PROPERTY ---
 */

import {
    type VPropertiesDict
} from '../../v-dom/v-facts/v-property';

export const apply = (node: any, dict: VPropertiesDict):void => {
    for (let key in dict) {
        if (key !== 'value' || node.value !== dict[ key ]) {
            node[ key ] = dict[ key ];
        }
    }
};
