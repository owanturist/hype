/* @flow */

/* --- MODEL --- */

export type Model = number;

export const initModel = (count: number): Model => count;

/* --- MESSAGES --- */


export type Msg
    = Decrement
    | Increment
    | Reset
    ;

export interface Decrement {
    type: 'Decrement';
}

export const decrement = (): Decrement => ({
    type: 'Decrement'
});

export interface Increment {
    type: 'Increment';
}

export const increment = (): Increment => ({
    type: 'Increment'
});

export interface Reset {
    type: 'Reset';
}

export const reset = (): Reset => ({
    type: 'Reset'
});
