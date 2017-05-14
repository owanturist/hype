/* @flow */

/**
 * --- VIRTUAL ATTRIBUTE ---
 */

export interface VAttribute {
    type: 'V_ATTRIBUTE';
    key: string;
    value: string;
}

export const attribute = (key: string, value: string): VAttribute => ({
    type: 'V_ATTRIBUTE',
    key,
    value
});
