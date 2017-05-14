/* @flow */

import {
    type Html,
    map,
    h1,
    div,
    input,
    text
} from '../../src/Html';
import {
    class_,
    type,
    placeholder
} from '../../src/Html/Attributes';
import {
    onInput
} from '../../src/Html/Events';

import * as Counter from './Counter/View';

import {
    type Model,
    type Msg,
    changeTitle,
    firstCounterMsg,
    secondCounterMsg
} from './Types';

/* --- VIEW --- */

export const view = (model: Model): Html<Msg> =>
    div([], [
        h1([
            class_('header')
        ], [
            text(model.title)
        ]),
        div([], [
            input([
                type('text'),
                placeholder('Type title please...'),
                onInput(changeTitle)
            ], [])
        ]),
        map(firstCounterMsg, Counter.view(model.firstCounter)),
        map(secondCounterMsg, Counter.view(model.secondCounter))
    ]);
