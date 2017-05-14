/* @flow */

import * as Counter from './Counter/Types';

/* --- MODEL --- */

export interface Model {
    title: string;
    firstCounter: Counter.Model;
    secondCounter: Counter.Model;
}

export const initModel = (
    title: string,
    firstCounter: Counter.Model,
    secondCounter: Counter.Model
    ): Model => ({
        title,
        firstCounter,
        secondCounter
});

/* --- MESSAGES --- */

export type Msg
    = ChangeTitle
    | FirstCounterMsg
    | SecondCounterMsg
    ;

export interface ChangeTitle {
    type: 'ChangeTitle';
    payload: string;
}

export const changeTitle = (title: string): ChangeTitle => ({
    type: 'ChangeTitle',
    payload: title
})

export interface FirstCounterMsg {
    type: 'FirstCounterMsg';
    payload: Counter.Msg;
}

export const firstCounterMsg = (msg: Counter.Msg): FirstCounterMsg => ({
    type: 'FirstCounterMsg',
    payload: msg
});

export interface SecondCounterMsg {
    type: 'SecondCounterMsg';
    payload: Counter.Msg;
}

export const secondCounterMsg = (msg: Counter.Msg): SecondCounterMsg => ({
    type: 'SecondCounterMsg',
    payload: msg
})
