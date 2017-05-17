/* @flow */

/**
 * --- VIRTUAL STYLE ---
 */

export interface VStyle {
    type: 'V_STYLE';
    value: Array<StyleTuple>;
}

export type Value
    = string
    ;

export type StyleTuple = [ string, Value ];

export const style = (value: Array<StyleTuple>): VStyle => ({
    type: 'V_STYLE',
    value
});

export type VStylesDict = {
    [ property: string ]: ?Value;
};
