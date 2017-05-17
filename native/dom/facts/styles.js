/* @flow */

/**
 * --- STYLE ---
 */

import {
    type VStylesDict
} from '../../v-dom/v-facts/v-style';
import {
    type HypeHTMLElement
} from '..';

export const apply = <Msg>(element: HypeHTMLElement<Msg>, dict: VStylesDict): void => {
    const elementStyles: CSSStyleDeclaration = element.style;

    for (let property in dict) {
        elementStyles.setProperty(property, dict[ property ]);
    }
};
