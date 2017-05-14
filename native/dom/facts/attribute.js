/* @flow */

/**
 * --- ATTRIBUTE ---
 */

import {
    type VAttribute
} from '../../v-dom/v-facts/v-attribute';
import {
    type HypeHTMLElement
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, { key, value }: VAttribute): void => {
    element.setAttribute(key, value);
};
