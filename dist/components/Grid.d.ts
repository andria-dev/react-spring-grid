/// <reference types="react" />
import { useTransition } from 'react-spring';
import { Props as ItemProps } from './Item';
import { ObjectOf, Component } from '../generics';
declare type useTransitionParams = Parameters<typeof useTransition>;
export interface RequiredItemFields {
    width: number;
    height: number;
}
export interface Props<T extends RequiredItemFields> extends ObjectOf<any> {
    items: T[];
    keys: useTransitionParams[1];
    renderer: ItemProps<T>['renderer'];
    wrapper: Component;
}
export declare function Grid<T extends RequiredItemFields>({ items, keys, renderer: ItemRenderer, wrapper: Component, style, ...props }: Props<T>): JSX.Element;
export {};
