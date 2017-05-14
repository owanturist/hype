/* @flow */

/**
 * --- STYLE ---
 */

import {
    type VStyle
} from '../../v-dom/v-facts/v-style';
import {
    type HypeHTMLElement
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, { styles }: VStyle): void => {
    const elementStyles: CSSStyleDeclaration = element.style;

    for (let [ property, value ] of styles) {
        elementStyles.setProperty(property, value);
    }
};
