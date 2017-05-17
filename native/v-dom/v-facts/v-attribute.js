/* @flow */

/**
 * --- VIRTUAL ATTRIBUTE ---
 */

export interface VAttribute {
    type: 'V_ATTRIBUTE';
    key: string;
    value: Value;
}

export type Value
    = string
    ;

export const attribute = (key: string, value: Value): VAttribute => ({
    type: 'V_ATTRIBUTE',
    key,
    value
});

export type VAttributesDict = {
    [ key: string ]: ?Value;
};
