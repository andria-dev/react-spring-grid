/// <reference types="react" />
export interface Props<T> {
    items: T[];
    keys: ((item: T) => any) | any[];
    children: any;
    component: any;
    [s: string]: any;
}
declare function Grid<T>({ items, keys, children: ItemRenderer, component: Component, style, ...props }: Props<T>): JSX.Element;
export { Grid };
