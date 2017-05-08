/* @flow */

/**
 * --- STYLE ---
 */

export interface Style {
    type: 'STYLE',
    styles: Array<StyleTuple>
}

export type StyleTuple = [ string, string ];

export const style = (styles: Array<StyleTuple>): Style => ({
    type: 'STYLE',
    styles
});
