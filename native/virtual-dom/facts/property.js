/* @flow */

/**
 * --- PROPERTY ---
 */

export interface Property {
    type: 'PROPERTY';
    key: string;
    value: string | bool;
}

export const property = (key: string, value: string | bool): Property => ({
    type: 'PROPERTY',
    key,
    value
});
