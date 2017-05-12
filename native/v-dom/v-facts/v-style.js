/* @flow */

/**
 * --- STYLE ---
 */

export interface VStyle {
    type: 'V_STYLE',
    styles: Array<StyleTuple>
}

export type StyleTuple = [ string, string ];

export const style = (styles: Array<StyleTuple>): VStyle => ({
    type: 'V_STYLE',
    styles
});
