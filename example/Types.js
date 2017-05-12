/* @flow */

import * as Counter from './Counter/Types';

/* --- MODEL --- */

export interface Model {
    firstCounter: Counter.Model;
    secondCounter: Counter.Model;
}

export const initModel = (
    firstCounter: Counter.Model,
    secondCounter: Counter.Model
    ): Model => ({
    firstCounter,
    secondCounter
});

/* --- MESSAGES --- */

export type Msg
    = FirstCounterMsg<Counter.Msg>
    | SecondCounterMsg<Counter.Msg>
    ;

export interface FirstCounterMsg<M> {
    type: 'FirstCounterMsg';
    payload: M;
}

export const firstCounterMsg = <M>(msg: M): FirstCounterMsg<M> => ({
    type: 'FirstCounterMsg',
    payload: msg
});

export interface SecondCounterMsg<M> {
    type: 'SecondCounterMsg';
    payload: M;
}

export const secondCounterMsg = <M>(msg: M): SecondCounterMsg<M> => ({
    type: 'SecondCounterMsg',
    payload: msg
})
