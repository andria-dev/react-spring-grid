/// <reference types="react" />
import { useTransition } from 'react-spring';
import { Item } from './Item';
import { ObjectOf, Component } from '../generics';
declare type useTransitionParams = Parameters<typeof useTransition>;
export interface Props<T> extends ObjectOf<any> {
    items: T | T[];
    keys: useTransitionParams[1];
    renderer: Parameters<typeof Item>[0]['renderer'];
    wrapper: Component;
}
export declare function Grid<T>({ items, keys, renderer: ItemRenderer, wrapper: Component, style, ...props }: Props<T>): JSX.Element;
export {};
