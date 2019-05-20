import React from 'react';
import { useTransition } from 'react-spring';
import { ObjectOf, UnwrapArray } from '../generics';
declare type style = UnwrapArray<ReturnType<typeof useTransition>>['props'];
export interface RendererProps extends ObjectOf<any> {
    data: any;
    style: style;
}
export interface Props<T> {
    renderer: React.ComponentType<RendererProps>;
    data: T;
    x: number;
    y: number;
    style: style;
}
export declare function Item<T>({ renderer: Renderer, data, style, x, y }: Props<T>): JSX.Element;
export {};
