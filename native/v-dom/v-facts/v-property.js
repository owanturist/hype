/* @flow */

/**
 * --- PROPERTY ---
 */

export interface VProperty {
    type: 'V_PROPERTY';
    key: string;
    value: string | boolean;
}

export const property = (key: string, value: string | boolean): VProperty => ({
    type: 'V_PROPERTY',
    key,
    value
});

export const stringProperty = (key: string) => (value: string): VProperty => property(key, value);
export const boolProperty = (key: string) => (value: boolean): VProperty => property(key, value);
export const numberProperty = (key: string) => (value: number): VProperty => property(key, value.toString());
