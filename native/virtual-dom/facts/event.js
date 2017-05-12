/* @flow */

/**
 * --- EVENT ---
 */

export interface Event<Msg> {
    type: 'EVENT';
    key: string;
    value: {
        decoder: Decoder<Msg>;
        options: Options;
    }
}

export type Decoder<Msg> = SyntheticInputEvent => Msg;

export interface Options {
    stopPropagation: boolean;
    preventDefault: boolean;
}

export const defaultOptions: Options = {
    stopPropagation: false,
    preventDefault: false
};

export const on = <Msg>(key: string, options: Options, decoder: Decoder<Msg>): Event<Msg> => ({
    type: 'EVENT',
    key,
    value: {
        options,
        decoder
    }
});
