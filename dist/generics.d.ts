import React from 'react';
export declare type ObjectOf<T> = {
    [s: string]: T;
};
export declare type Component<T = ObjectOf<any>> = string | React.ComponentType<T>;
export declare type UnwrapArray<T> = T extends Array<infer U> ? U : T;
