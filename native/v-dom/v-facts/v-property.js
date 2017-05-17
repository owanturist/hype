/* @flow */

/**
 * --- VIRTUAL PROPERTY ---
 */

export interface VProperty {
    type: 'V_PROPERTY';
    key: string;
    value: Value;
}

export type Value
    = string
    | boolean
    ;

export const property = (key: string, value: Value): VProperty => ({
    type: 'V_PROPERTY',
    key,
    value
});

export const stringProperty = (key: string) => (value: string): VProperty => property(key, value);
export const boolProperty = (key: string) => (value: boolean): VProperty => property(key, value);
export const numberProperty = (key: string) => (value: number): VProperty => property(key, value.toString());

export type VPropertiesDict = {
    [ key: string ]: ?Value;
};
