/* @flow */

import type {
    StyleTuple
} from '../../native/virtual-dom/facts/style';
import {
    style as style_
} from '../../native/virtual-dom/facts/style';

import type {
    Attribute
} from './';

/**
 * --- ATTRIBUTES ---
 */

/* --- Primitives --- */

export const style: <Msg>(styles: Array<StyleTuple>) => Attribute<Msg> = style_;
