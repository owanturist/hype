/* @flow */

import type {
    Html
} from './Html';
import {
    div,
    button,
    input,
    text
} from './Html';
import {
    onClick,
    onInput
} from './Html/Events';

type Msg
    = Increment
    | Decrement
    | Change
    | Reset
    ;

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

interface Change {
    type: 'Change',
    payload: string
}

const change = (text: string): Change => ({
    type: 'Change',
    payload: text
});

interface Reset {
    type: 'Reset';
    payload: number;
}

const reset = (): Reset => ({
    type: 'Reset',
    payload: 12
})

export const view = (count: number): Html<Msg> => (
    div([], [
        button([
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
            onInput(change)
        ], []),
        button([
            onClick(reset)
        ], [
            text('reset')
        ])
    ])
);
