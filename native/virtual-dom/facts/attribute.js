/* @flow */

/**
 * --- ATTRIBUTE ---
 */

export interface Attribute {
    type: 'ATTRIBUTE';
    key: string;
    value: string;
}

export const attribute = (key: string, value: string): Attribute => ({
    type: 'ATTRIBUTE',
    key,
    value
});
