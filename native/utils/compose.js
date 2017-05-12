/* @flow */

export const compose2 = <T1, T2, R>(
    fn2: T2 => R,
    fn1: T1 => T2
): (val: T1) => R =>
    (val: T1) => fn2(fn1(val));
