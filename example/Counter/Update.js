/* @flow */

import {
    type Model,
    type Msg,
    initModel
} from './Types';

export const initialModel: Model = initModel(0);

export const update = (msg: Msg, model: Model): Model => {
    switch (msg.type) {
        case 'Decrement': {
            return model - 1;
        }

        case 'Increment': {
            return model + 1;
        }

        case 'Reset': {
            return initialModel;
        }

        default: (msg: empty)
            throw 'unknown msg';
    }
}
