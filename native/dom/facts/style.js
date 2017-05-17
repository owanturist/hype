/* @flow */

/**
 * --- STYLE ---
 */

import {
    type VStylesList
} from '../../v-dom/v-facts/v-style';
import {
    type HypeHTMLElement
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, stylesList: VStylesList): void => {
    const elementStyles: CSSStyleDeclaration = element.style;

    for (let [ property, value ] of stylesList) {
        elementStyles.setProperty(property, value);
    }
};
