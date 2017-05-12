/* @flow */

/**
 * --- EVENT ---
 */

export interface VEvent<Msg> {
    type: 'V_EVENT';
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

export const vEvent = <Msg>(key: string, options: Options, decoder: Decoder<Msg>): VEvent<Msg> => ({
    type: 'V_EVENT',
    key,
    value: {
        options,
        decoder
    }
});
