/* @flow */

import {
    type VHtml,
    vNode,
    vMap,
    vText
} from '../../native/v-dom/v-node';
import {
    type VFact
} from '../../native/v-dom/v-facts';

/**
 * --- PRIMITIVES ---
 */

export type Html<Msg> = VHtml<Msg>;

export type Attribute<Msg> = VFact<Msg>;

export const node: <Msg>(string, Array<Attribute<Msg>>, Array<Html<Msg>>) => Html<Msg> = vNode;

export const text: <Msg>(string) => Html<Msg> = vText;

export const map: <A, Msg>(A => Msg, Html<A>) => Html<Msg> = vMap;

/**
 * --- TAGS ---
 */

/* --- Headers --- */

export const h1 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('h1', attributes, children);
export const h2 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('h2', attributes, children);
export const h3 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('h3', attributes, children);
export const h4 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('h4', attributes, children);
export const h5 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('h5', attributes, children);
export const h6 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('h6', attributes, children);

/* --- Grouping Content --- */

export const div = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('div', attributes, children);
export const p = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('p', attributes, children);
export const hr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('hr', attributes, children);
export const pre = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('pre', attributes, children);
export const blockquote = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('blockquote', attributes, children);

/* --- Text --- */

export const span = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('span', attributes, children);
export const a = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('a', attributes, children);
export const code = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('code', attributes, children);
export const em = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('em', attributes, children);
export const strong = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('strong', attributes, children);
export const i = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('i', attributes, children);
export const b = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('b', attributes, children);
export const u = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('u', attributes, children);
export const sub = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('sub', attributes, children);
export const sup = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('sup', attributes, children);
export const br = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('br', attributes, children);

/* --- Lists --- */

export const ol = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('ol', attributes, children);
export const ul = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('ul', attributes, children);
export const li = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('li', attributes, children);
export const dl = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('dl', attributes, children);
export const dt = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('dt', attributes, children);
export const dd = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('dd', attributes, children);

/* --- Emdedded Content --- */

export const img = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('img', attributes, children);
export const iframe = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('iframe', attributes, children);
export const canvas = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('canvas', attributes, children);
export const math = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('math', attributes, children);

/* --- Inputs --- */

export const form = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('form', attributes, children);
export const input = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('input', attributes, children);
export const textarea = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('textarea', attributes, children);
export const button = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('button', attributes, children);
export const select = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('select', attributes, children);
export const option = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('option', attributes, children);

/* --- Sections --- */

export const section = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('section', attributes, children);
export const nav = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('nav', attributes, children);
export const article = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('article', attributes, children);
export const aside = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('aside', attributes, children);
export const header = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('header', attributes, children);
export const footer = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('footer', attributes, children);
export const address = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('address', attributes, children);
export const main = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('main', attributes, children);
export const body = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('body', attributes, children);

/* --- Figures ---*/

export const figure = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('figure', attributes, children);
export const figcaption = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('figcaption', attributes, children);

/* --- Tables --- */

export const table = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('table', attributes, children);
export const caption = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('caption', attributes, children);
export const colgroup = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('colgroup', attributes, children);
export const col = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('col', attributes, children);
export const tbody = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('tbody', attributes, children);
export const thead = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('thead', attributes, children);
export const tfoot = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('tfoot', attributes, children);
export const tr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('tr', attributes, children);
export const td = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('td', attributes, children);
export const th = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('th', attributes, children);

/**
 * --- LESS COMMON ELEMENTS ---
 */

/* --- Less Common Inputs --- */

export const fieldset = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('fieldset', attributes, children);
export const legend = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('legend', attributes, children);
export const label = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('label', attributes, children);
export const datalist = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('datalist', attributes, children);
export const optgroup = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('optgroup', attributes, children);
export const keygen = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('keygen', attributes, children);
export const output = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('output', attributes, children);
export const progress = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('progress', attributes, children);
export const meter = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('meter', attributes, children);

/* --- Audio and Video --- */

export const audio = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('audio', attributes, children);
export const video = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('video', attributes, children);
export const source = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('source', attributes, children);
export const track = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('track', attributes, children);

/* --- Embedded Objects --- */

export const embeded = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('embeded', attributes, children);
export const object = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('object', attributes, children);
export const param = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('param', attributes, children);

/* --- Text Edits --- */

export const ins = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('ins', attributes, children);
export const del = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('del', attributes, children);

/* --- Semantic Text --- */

export const small = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('small', attributes, children);
export const cite = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('cite', attributes, children);
export const dfn = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('dfn', attributes, children);
export const abbr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('abbr', attributes, children);
export const time = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('time', attributes, children);
export const var_ = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('var', attributes, children);
export const samp = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('samp', attributes, children);
export const kbd = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('kbd', attributes, children);
export const s = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('s', attributes, children);
export const q = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('q', attributes, children);

/* --- Less Common Text Tags --- */

export const mark = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('mark', attributes, children);
export const ruby = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('ruby', attributes, children);
export const rt = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('rt', attributes, children);
export const rp = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('rp', attributes, children);
export const bdi = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('bdi', attributes, children);
export const bdo = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('bdo', attributes, children);
export const wbr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('wbr', attributes, children);

/* --- Interactive Elements --- */

export const details = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('details', attributes, children);
export const summary = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('summary', attributes, children);
export const menuitem = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('menuitem', attributes, children);
export const menu = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>):Html<Msg> =>
    node('menu', attributes, children);
