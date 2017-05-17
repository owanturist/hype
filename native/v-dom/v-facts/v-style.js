/* @flow */

/**
 * --- VIRTUAL STYLE ---
 */

export interface VStyle {
    type: 'V_STYLE',
    value: Value
}

export type Value
    = Array<StyleTuple>
    ;

export type StyleTuple = [ string, string ];

export const style = (value: Value): VStyle => ({
    type: 'V_STYLE',
    value
});

export type VStylesList = Value;
