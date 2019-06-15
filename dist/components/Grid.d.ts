/// <reference types="react" />
import { Props as ItemProps } from './Item';
import { ObjectOf, Component } from '../generics';
declare type keys<T> = string | number | readonly (string | number)[] | ((item: T) => string | number) | null;
export interface RequiredItemFields {
    width: number;
    height: number;
}
export interface Props<T extends RequiredItemFields> extends ObjectOf<any> {
    items: T[];
    keys: keys<T>;
    renderer: ItemProps<T>['renderer'];
    wrapper?: Component;
    columnGap?: number;
    rowGap?: number;
}
export declare function Grid<T extends RequiredItemFields>({ items, keys, renderer: ItemRenderer, wrapper: Component, style, columnGap, rowGap, ...props }: Props<T>): JSX.Element;
export {};
