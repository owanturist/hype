/* @flow */

/**
 * --- VIRTUAL EVENT ---
 */

export interface VEvent<Msg> {
    type: 'V_EVENT';
    key: string;
    value: Value<Msg>
}

export interface Value<Msg> {
    decoder: Decoder<Msg>;
    options: Options;
}

export type Decoder<Msg> = Event => Msg;

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

export type VEventDict<Msg> = {
    [ key: string ]: ?Value<Msg>;
};
