/* @flow */

import * as Counter from './Counter/Update';

import {
    type Model,
    type Msg,
    initModel
} from './Types';

export const initialModel: Model = initModel(
    '',
    Counter.initialModel,
    Counter.initialModel
);

export const update = (msg: Msg, model: Model): Model => {
    switch (msg.type) {
        case 'ChangeTitle': {
            return Object.assign({}, model, {
                title: msg.payload
            });
        }

        case 'FirstCounterMsg': {
            return Object.assign({}, model, {
                firstCounter: Counter.update(msg.payload, model.firstCounter)
            });
        }

        case 'SecondCounterMsg': {
            return Object.assign({}, model, {
                secondCounter: Counter.update(msg.payload, model.secondCounter)
            });
        }

        default: (msg: empty)
            throw 'unknown msg';
    }
}
