/* @flow */

import { view } from './App/View';
import { update } from './App/Update';
import {
    initialModel
} from './App/Update';

import {
    render
} from '../native/dom/node';
import {
    diff
} from '../native/diff/d-node';

const hello = (s: string): void => {
    let model = initialModel;
    let prevView = view(model);

    const foo: any = {
        tagger: a => {
            model = update(a, model);
            const nextView = view(model);
            const df = diff(prevView, nextView);
            prevView = nextView;
            console.log(df)
        },
        parent: undefined
    };

    const container: any = document.getElementById('app');
    const html: any = render(prevView, foo);

    container.appendChild(html);
}

hello('123')
