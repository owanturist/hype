/* @flow */

import {
    type Node,
    tag,
    map as map_,
    text as text_
} from '../../native/virtual-dom/nodes';
import {
    type Fact
} from '../../native/virtual-dom/facts';

/**
 * --- PRIMITIVES ---
 */

export type Html<Msg> = Node<Msg>;

export type Attribute<Msg> = Fact<Msg>;

export const node = <Msg>(tagName: string, attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag(tagName)(attributes, children);

export const text: <Msg>(string) => Html<Msg> = text_;

export const map: <A, Msg>(A => Msg, Html<A>) => Html<Msg> = map_;

/**
 * --- TAGS ---
 */

/* --- Headers --- */

export const h1 = tag('h1');
export const h2 = tag('h2');
export const h3 = tag('h3');
export const h4 = tag('h4');
export const h5 = tag('h5');
export const h6 = tag('h6');

/* --- Grouping Content --- */

export const div = tag('div');
export const p = tag('p');
export const hr = tag('hr');
export const pre = tag('pre');
export const blockquote = tag('blockquote');

/* --- Text --- */

export const span = tag('span');
export const a = tag('a');
export const code = tag('code');
export const em = tag('em');
export const strong = tag('strong');
export const i = tag('i');
export const b = tag('b');
export const u = tag('u');
export const sub = tag('sub');
export const sup = tag('sup');
export const br = tag('br');

/* --- Lists --- */

export const ol = tag('ol');
export const ul = tag('ul');
export const li = tag('li');
export const dl = tag('dl');
export const dt = tag('dt');
export const dd = tag('dd');

/* --- Emdedded Content --- */

export const img = tag('img');
export const iframe = tag('iframe');
export const canvas = tag('canvas');
export const math = tag('math');

/* --- Inputs --- */

export const form = tag('form');
export const input = tag('input');
export const textarea = tag('textarea');
export const button = tag('button');
export const select = tag('select');
export const option = tag('option');

/* --- Sections --- */

export const section = tag('section');
export const nav = tag('nav');
export const article = tag('article');
export const aside = tag('aside');
export const header = tag('header');
export const footer = tag('footer');
export const address = tag('address');
export const main = tag('main');
export const body = tag('body');

/* --- Figures ---*/

export const figure = tag('figure');
export const figcaption = tag('figcaption');

/* --- Tables --- */

export const table = tag('table');
export const caption = tag('caption');
export const colgroup = tag('colgroup');
export const col = tag('col');
export const tbody = tag('tbody');
export const thead = tag('thead');
export const tfoot = tag('tfoot');
export const tr = tag('tr');
export const td = tag('td');
export const th = tag('th');

/**
 * --- LESS COMMON ELEMENTS ---
 */

/* --- Less Common Inputs --- */

export const fieldset = tag('fieldset');
export const legend = tag('legend');
export const label = tag('label');
export const datalist = tag('datalist');
export const optgroup = tag('optgroup');
export const keygen = tag('keygen');
export const output = tag('output');
export const progress = tag('progress');
export const meter = tag('meter');

/* --- Audio and Video --- */

export const audio = tag('audio');
export const video = tag('video');
export const source = tag('source');
export const track = tag('track');

/* --- Embedded Objects --- */

export const embeded = tag('embeded');
export const object = tag('object');
export const param = tag('param');

/* --- Text Edits --- */

export const ins = tag('ins');
export const del = tag('del');

/* --- Semantic Text --- */

export const small = tag('small');
export const cite = tag('cite');
export const dfn = tag('dfn');
export const abbr = tag('abbr');
export const time = tag('time');
export const var_ = tag('var');
export const samp = tag('samp');
export const kbd = tag('kbd');
export const s = tag('s');
export const q = tag('q');

/* --- Less Common Text Tags --- */

export const mark = tag('mark');
export const ruby = tag('ruby');
export const rt = tag('rt');
export const rp = tag('rp');
export const bdi = tag('bdi');
export const bdo = tag('bdo');
export const wbr = tag('wbr');

/* --- Interactive Elements --- */

export const details = tag('details');
export const summary = tag('summary');
export const menuitem = tag('menuitem');
export const menu = tag('menu');
