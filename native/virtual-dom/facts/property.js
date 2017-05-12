/* @flow */

/**
 * --- PROPERTY ---
 */

export interface Property {
    type: 'PROPERTY';
    key: string;
    value: string | boolean;
}

export const property = (key: string, value: string | boolean): Property => ({
    type: 'PROPERTY',
    key,
    value
});

export const stringProperty = (key: string) => (value: string): Property => property(key, value);
export const boolProperty = (key: string) => (value: boolean): Property => property(key, value);
export const numberProperty = (key: string) => (value: number): Property => property(key, value.toString());
