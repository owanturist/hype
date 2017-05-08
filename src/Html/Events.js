/* @flow */

import type {
    Decoder,
    Options
} from '../../native/virtual-dom/facts/event';
import {
    on as on_,
    defaultOptions
} from '../../native/virtual-dom/facts/event';

import type {
    Attribute
} from './';

/**
 * --- EVENTS ---
 */

/* --- Custom Event Handlers --- */

export const on = <Msg>(key: string, decoder: Decoder<Msg>): Attribute<Msg> => on_(key, defaultOptions, decoder);

export const onWithOptions: <Msg>(key: string, options: Options, decoder: Decoder<Msg>) => Attribute<Msg> = on_;

export type {
    Event,
    Options
} from '../../native/virtual-dom/facts/event';

export {
    defaultOptions
} from '../../native/virtual-dom/facts/event';

/* --- Custom Decoders --- */

export const targetValue = (event: SyntheticInputEvent): string => event.target.value;

export const targetChecked = (event: SyntheticInputEvent): bool => event.target.checked;

export const keyCode = (event: KeyboardEvent): number => event.keyCode;

/* --- Mouse Events --- */

export const onClick = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('click', tagger);

export const onDoubleClick = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('dblclick', tagger);

export const onMouseDown = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('mousedown', tagger);

export const onMouseUp = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('mouseup', tagger);

export const onMouseEnter = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('mouseenter', tagger);

export const onMouseLeave = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('mouseleave', tagger);

export const onMouseOver = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('mouseover', tagger);

export const onMouseOut = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('mouseout', tagger);

/* --- Form Events --- */

export const onInput = <Msg>(tagger: (value: string) => Msg): Attribute<Msg> =>
    on('input', (event: SyntheticInputEvent) => tagger(targetValue(event)));

export const onCheck = <Msg>(tagger: (value: bool) => Msg): Attribute<Msg> =>
    on('change', (event: SyntheticInputEvent) => tagger(targetChecked(event)));

const onSubmitOptions: Options = {
    stopPropagation: false,
    preventDefault: true
};

export const onSubmit = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('change', onSubmitOptions, tagger);

/* --- Focus Events --- */

export const onBlur = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('blur', tagger);

export const onFocus = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    on('focus', tagger);
