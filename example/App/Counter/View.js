/* @flow */

import {
    type Html,
    div,
    button,
    text
} from '../../../src/Html';
import {
    class_
} from '../../../src/Html/Attributes';
import {
    onClick
} from '../../../src/Html/Events';

import {
    type Model,
    type Msg,
    decrement,
    increment,
    reset
} from './Types';

/* --- VIEW --- */

export const view = (model: Model): Html<Msg> =>
    div([], [
        div([], [
            button([
                class_('button'),
                onClick(decrement)
            ], [
                text('-')
            ]),
            text(model.toString()),
            button([
                class_('button'),
                onClick(increment)
            ], [
                text('+')
            ])
        ]),
        div([], [
            button([
                class_('button'),
                onClick(reset)
            ], [
                text('Reset')
            ])
        ])
    ]);
