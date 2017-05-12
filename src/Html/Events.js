/* @flow */

import {
    type Decoder,
    type Options,
    on as on_,
    defaultOptions
} from '../../native/virtual-dom/facts/event';
import {
    compose2
} from '../../native/utils/compose';

import {
    type Attribute
} from './';

/**
 * --- EVENTS ---
 */

/* --- Custom Event Handlers --- */

export const on = <Msg>(key: string, decoder: Decoder<Msg>): Attribute<Msg> => on_(key, defaultOptions, decoder);

export const onWithOptions: <Msg>(string, Options, Decoder<Msg>) => Attribute<Msg> = on_;

export type {
    Event,
    Options
} from '../../native/virtual-dom/facts/event';

export {
    defaultOptions
} from '../../native/virtual-dom/facts/event';

/* --- Custom Decoders --- */

export const targetValue = (event: SyntheticInputEvent): string => event.target.value;

export const targetChecked = (event: SyntheticInputEvent): boolean => event.target.checked;

export const keyCode = (event: KeyboardEvent): number => event.keyCode;

/* --- Mouse Events --- */

export const onClick = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('click', defaultOptions, tagger);

export const onDoubleClick = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('dblclick', defaultOptions, tagger);

export const onMouseDown = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('mousedown', defaultOptions, tagger);

export const onMouseUp = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('mouseup', defaultOptions, tagger);

export const onMouseEnter = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('mouseenter', defaultOptions, tagger);

export const onMouseLeave = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('mouseleave', defaultOptions, tagger);

export const onMouseOver = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('mouseover', defaultOptions, tagger);

export const onMouseOut = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('mouseout', defaultOptions, tagger);

/* --- Form Events --- */

export const onInput = <Msg>(tagger: string => Msg): Attribute<Msg> =>
    onWithOptions('input', defaultOptions, compose2(tagger, targetValue));

export const onCheck = <Msg>(tagger: boolean => Msg): Attribute<Msg> =>
    onWithOptions('change', defaultOptions, compose2(tagger, targetChecked));

const onSubmitOptions: Options = {
    stopPropagation: false,
    preventDefault: true
};

export const onSubmit = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('change', onSubmitOptions, tagger);

/* --- Focus Events --- */

export const onBlur = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('blur', defaultOptions, tagger);

export const onFocus = <Msg>(tagger: () => Msg): Attribute<Msg> =>
    onWithOptions('focus', defaultOptions, tagger);
