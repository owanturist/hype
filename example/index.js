/* @flow */

import type {
    Html
} from '../src/Html';
import {
    div,
    button,
    input,
    text
} from '../src/Html';
import {
    class_,
    classList,
    type
} from '../src/Html/Attributes';
import {
    onClick,
    onInput
} from '../src/Html/Events';

type Msg
    = Increment
    | Decrement
    | Change<string>
    | Reset
    | SubMsg<Msg>
    ;

interface SubMsg<T> {
    type: 'SubMsg';
    payload: T;
}

const subMsg = <T>(msg: T): SubMsg<T> => ({
    type: 'SubMsg',
    payload: msg
})

interface Increment {
    type: 'Increment';
}

const increment = (): Increment => ({
    type: 'Increment'
})

interface Decrement {
    type: 'Decrement';
}

const decrement = (): Decrement => ({
    type: 'Decrement'
});

interface Change<T> {
    type: 'Change',
    payload: T
}

const change = <T>(text: T): Change<T> => ({
    type: 'Change',
    payload: text
});

interface Reset {
    type: 'Reset';
}

const reset = (): Reset => ({
    type: 'Reset'
})

export const view = (count: number): Html<Msg> => (
    div([
        class_('container')
    ], [
        button([
            classList([
                [ 'hello', false ],
                [ 'hello', true ]
            ]),
            onClick(decrement)
        ], [
            text('-')
        ]),
        text(count.toString()),
        div([], [
            div([], [])
        ]),
        button([
            onClick(increment)
        ], [
            text('+')
        ]),
        input([
            type('text'),
            onInput(change)
        ], []),
        button([
            onClick(reset)
        ], [
            text('reset')
        ])
    ])
);
