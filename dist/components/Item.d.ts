import React from 'react';
import { useTransition } from 'react-spring';
import { UnwrapArray } from '../generics';
declare type style = UnwrapArray<ReturnType<typeof useTransition>>['props'];
export interface RendererProps<T> {
    data: T;
    style: style;
    index: number;
}
export interface Props<T> {
    renderer: React.ComponentType<RendererProps<T>>;
    data: T;
    x: number;
    y: number;
    style: style;
    index: number;
}
export declare function Item<T>({ renderer: Renderer, data, style, x, y, index }: Props<T>): JSX.Element;
export {};
