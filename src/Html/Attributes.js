/* @flow */

import type {
    StyleTuple
} from '../../native/virtual-dom/facts/style';
import {
    style as style_
} from '../../native/virtual-dom/facts/style';
import {
    property as property_
} from '../../native/virtual-dom/facts/property';

import type {
    Attribute
} from './';

/**
 * --- ATTRIBUTES ---
 */

/* --- Primitives --- */

export const style: <Msg>(styles: Array<StyleTuple>) => Attribute<Msg> = style_;

export const property: <Msg>(key: string, value: string | bool) => Attribute<Msg> = property_;

const stringProperty = (key: string) => <Msg>(value: string): Attribute<Msg> => property(key, value);
const boolProperty = (key: string) => <Msg>(value: bool): Attribute<Msg> => property(key, value);
const numberProperty = (key: string) => <Msg>(value: number): Attribute<Msg> => property(key, value.toString());

/* --- Super Common Attributes --- */

export const class_ = stringProperty('className');

export const classList = <Msg>(values: Array<[ string, bool ]>): Attribute<Msg> => {
    const result: Array<string> = [];

    for (let [ value, condition ] of values) {
        if (condition) {
            result.push(value);
        }
    }

    return class_(result.join(' '));
};

export const id = stringProperty('id');
export const hidden = boolProperty('hidden');
export const title = stringProperty('title');

/* --- Inputs --- */

export const type = stringProperty('type');
export const value = stringProperty('value');
export const defaultValue = stringProperty('defaultValue');
export const checked = boolProperty('checked');
export const placeholder = stringProperty('placeholder');
export const selected = boolProperty('selected');

/* --- Input Helpers --- */

export const accept = stringProperty('accept');
export const acceptCharset = stringProperty('acceptCharset');
export const action = stringProperty('action');

export const autocomplete = <Msg>(value: bool): Attribute<Msg> => property(
    'autocomplete',
    value ? 'on' : 'off'
);

export const autofocus = boolProperty('autofocus');
export const disabled = boolProperty('disabled');
export const enctype = stringProperty('enctype');
export const formaction = stringProperty('formaction');
export const list = stringProperty('list');
export const maxlength = numberProperty('maxlength');
export const minlength = numberProperty('minLength');
export const method = stringProperty('method');
export const multiple = boolProperty('multiple');
export const name = stringProperty('name');
export const novalidate = boolProperty('noValidate');
export const pattern = stringProperty('pattern');
export const readonly = boolProperty('readOnly');
export const required = boolProperty('required');
export const size = numberProperty('size');
export const htmlfor = stringProperty('htmlFor');
export const form = stringProperty('form');

/* --- Input Ranges --- */

export const min = stringProperty('min');
export const max = stringProperty('max');
export const step = stringProperty('step');

/* --- Input Text Areas --- */

export const cols = numberProperty('cols');
export const rows = numberProperty('rows');
export const wrap = stringProperty('wrap');

/* --- Links and Areas --- */

export const href = stringProperty('href');
export const target = stringProperty('target');
export const download = boolProperty('download');
export const downloadAs = stringProperty('downloadAs');
export const hreflang = stringProperty('hreflang');
export const media = stringProperty('media');
export const ping = stringProperty('ping');
export const rel = stringProperty('rel');

/* --- Maps --- */

export const ismap = boolProperty('isMap');
export const usemap = stringProperty('useMap');
export const shape = stringProperty('shape');
export const coords = stringProperty('coords');

/* --- Embedded Content ---*/

export const src = stringProperty('src');
export const height = numberProperty('height');
export const width = numberProperty('width');
export const alt = stringProperty('alt');

/* --- Audio and Video --- */

export const autoplay = boolProperty('autoplay');
export const controls = boolProperty('controls');
export const loop = boolProperty('loop');
export const preload = stringProperty('preload');
export const poster = stringProperty('poster');
export const default_ = boolProperty('default');
export const kind = stringProperty('kind');
export const srclang = stringProperty('srclang');

/* --- Iframes --- */

export const sandbox = stringProperty('sandbox');
export const seamless = boolProperty('seamless');
export const srcdoc = stringProperty('srcdoc');

/* --- Ordered Lists --- */

export const reversed = boolProperty('reversed');
export const start = numberProperty('start');

/* --- Tables --- */

export const align = numberProperty('align');
export const colspan = numberProperty('colspan');
export const rowspan = numberProperty('rowspan');
export const headers = stringProperty('headers');
export const scope = stringProperty('scope');

/* --- Header Stuff --- */

export const async = boolProperty('async');
export const charset = stringProperty('charset');
export const content = stringProperty('content');
export const defer = boolProperty('defer');
export const httpEquiv = stringProperty('httpEquiv');
export const language = stringProperty('language');
export const scoped = boolProperty('scoped');

/* --- Less Common Global Attributes --- */

export const accessKey = stringProperty('accessKey');
export const contenteditable = boolProperty('contenteditable');
export const contextmenu = stringProperty('contextmenu');
export const dir = stringProperty('dir');
export const draggable = stringProperty('draggable');
export const dropzone = stringProperty('dropzone');
export const itemprop = stringProperty('itemprop');
export const lang = stringProperty('lang');
export const spellcheck = boolProperty('spellcheck');
export const tabindex = numberProperty('tabIndex');

/* --- Key Generation --- */

export const challenge = stringProperty('challenge');
export const keytype = stringProperty('keytype');

/* --- Miscellaneous --- */

export const cite = stringProperty('cite');
export const datetime = stringProperty('datetime');
export const pubdate = stringProperty('pubdate');
export const manifest = stringProperty('manifest');
