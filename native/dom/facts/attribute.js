/* @flow */

/**
 * --- ATTRIBUTE ---
 */

import {
    type VAttribute,
    type VAttributesDict
} from '../../v-dom/v-facts/v-attribute';
import {
    type HypeHTMLElement
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, dict: VAttributesDict): void => {
    for (let key in dict) {
        if (dict[ key ]) {
            element.setAttribute(key, dict[ key ].value);
        } else {
            element.removeAttribute(key);
        }
    }
};
