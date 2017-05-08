/* @flow */

import type {
    Node
} from '../../native/virtual-dom/nodes';
import {
    tag
} from '../../native/virtual-dom/nodes';
import type {
    Fact
} from '../../native/virtual-dom/facts';

/**
 * --- PRIMITIVES ---
 */

export type Html<Msg> = Node<Msg>;

export type Attribute<Msg> = Fact<Msg>;

export {
    tag as node,
    text
} from '../../native/virtual-dom/nodes';

/**
 * --- TAGS ---
 */

/* --- Headers --- */

export const h1 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('h1', attributes, children)

export const h2 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('h2', attributes, children)

export const h3 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('h3', attributes, children)

export const h4 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('h4', attributes, children)

export const h5 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('h5', attributes, children)

export const h6 = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('h6', attributes, children)

/* --- Grouping Content --- */

export const div = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('div', attributes, children)

export const p = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('p', attributes, children)

export const hr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('hr', attributes, children)

export const pre = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('pre', attributes, children)

export const blockquote = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('blockquote', attributes, children)

/* --- Text --- */

export const span = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('span', attributes, children)

export const a = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('a', attributes, children)

export const code = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('code', attributes, children)

export const em = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('em', attributes, children)

export const strong = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('strong', attributes, children)

export const i = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('i', attributes, children)

export const b = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('b', attributes, children)

export const u = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('u', attributes, children)

export const sub = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('sub', attributes, children)

export const sup = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('sup', attributes, children)

export const br = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('br', attributes, children)

/* --- Lists --- */

export const ol = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('ol', attributes, children)

export const ul = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('ul', attributes, children)

export const li = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('li', attributes, children)

export const dl = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('dl', attributes, children)

export const dt = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('dt', attributes, children)

export const dd = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('dd', attributes, children)

/* --- Emdedded Content --- */

export const img = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('img', attributes, children)

export const iframe = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('iframe', attributes, children)

export const canvas = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('canvas', attributes, children)

export const math = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('math', attributes, children)

/* --- Inputs --- */

export const form = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('form', attributes, children)

export const input = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('input', attributes, children)

export const textarea = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('textarea', attributes, children)

export const button = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('button', attributes, children)

export const select = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('select', attributes, children)

export const option = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('option', attributes, children)

/* --- Sections --- */

export const section = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('section', attributes, children)

export const nav = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('nav', attributes, children)

export const article = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('article', attributes, children)

export const aside = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('aside', attributes, children)

export const header = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('header', attributes, children)

export const footer = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('footer', attributes, children)

export const address = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('address', attributes, children)

export const main = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('main', attributes, children)

export const body = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('body', attributes, children)

/* --- Figures ---*/

export const figure = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('figure', attributes, children)

export const figcaption = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('figcaption', attributes, children)

/* --- Tables --- */

export const table = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('table', attributes, children)

export const caption = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('caption', attributes, children)

export const colgroup = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('colgroup', attributes, children)

export const col = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('col', attributes, children)

export const tbody = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('tbody', attributes, children)

export const thead = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('thead', attributes, children)

export const tfoot = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('tfoot', attributes, children)

export const tr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('tr', attributes, children)

export const td = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('td', attributes, children)

export const th = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('th', attributes, children)

/**
 * --- LESS COMMON ELEMENTS ---
 */

/* --- Less Common Inputs --- */

export const fieldset = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('fieldset', attributes, children)

export const legend = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('legend', attributes, children)

export const label = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('label', attributes, children)

export const datalist = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('datalist', attributes, children)

export const optgroup = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('optgroup', attributes, children)

export const keygen = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('keygen', attributes, children)

export const output = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('output', attributes, children)

export const progress = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('progress', attributes, children)

export const meter = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('meter', attributes, children)

/* --- Audio and Video --- */

export const audio = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('audio', attributes, children)

export const video = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('video', attributes, children)

export const source = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('source', attributes, children)

export const track = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('track', attributes, children)

/* --- Embedded Objects --- */

export const embeded = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('embeded', attributes, children)

export const object = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('object', attributes, children)

export const param = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('param', attributes, children)

/* --- Text Edits --- */

export const ins = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('ins', attributes, children)

export const del = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('del', attributes, children)

/* --- Semantic Text --- */

export const small = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('small', attributes, children)

export const cite = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('cite', attributes, children)

export const dfn = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('dfn', attributes, children)

export const abbr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('abbr', attributes, children)

export const time = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('time', attributes, children)

export const var_ = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('var', attributes, children)

export const samp = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('samp', attributes, children)

export const kbd = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('kbd', attributes, children)

export const s = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('s', attributes, children)

export const q = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('q', attributes, children)

/* --- Less Common Text Tags --- */

export const mark = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('mark', attributes, children)

export const ruby = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('ruby', attributes, children)

export const rt = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('rt', attributes, children)

export const rp = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('rp', attributes, children)

export const bdi = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('bdi', attributes, children)

export const bdo = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('bdo', attributes, children)

export const wbr = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('wbr', attributes, children)

/* --- Interactive Elements --- */

export const details = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('details', attributes, children)

export const summary = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('summary', attributes, children)

export const menuitem = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('menuitem', attributes, children)

export const menu = <Msg>(attributes: Array<Attribute<Msg>>, children: Array<Html<Msg>>): Html<Msg> =>
    tag('menu', attributes, children)
