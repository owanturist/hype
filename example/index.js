/* @flow */

import * as App from './App/View';
import {
    initialModel
} from './App/Update';

import {
    render
} from '../native/dom/node';

const hello = (s: string): void => {
    const foo: any = {
        tagger: a => a,
        parent: undefined
    };

    const container: any = document.getElementById('app');
    const html: any = render(App.view(initialModel), foo);

    container.appendChild(html);
}

hello('123')
