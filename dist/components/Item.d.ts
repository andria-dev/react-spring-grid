/// <reference types="react" />
interface Props<T> {
    component: any;
    data: T;
    x: number;
    y: number;
    style: {
        [s: string]: any;
    };
}
declare function Item<T>({ component: Component, data, style, x, y }: Props<T>): JSX.Element;
export { Item };
