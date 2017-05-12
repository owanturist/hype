/* @flow */

import {
    type Html,
    map,
    div
} from '../src/Html';

import * as Counter from './Counter/View';

import {
    type Model,
    type Msg,
    firstCounterMsg,
    secondCounterMsg
} from './Types';

/* --- VIEW --- */

export const view = (model: Model): Html<Msg> =>
    div([], [
        map(firstCounterMsg, Counter.view(model.firstCounter)),
        map(secondCounterMsg, Counter.view(model.secondCounter))
    ]);
