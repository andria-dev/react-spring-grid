import React from 'react'
import { useSpring, useTransition } from 'react-spring'
import { ObjectOf, UnwrapArray } from '../generics'

type style = UnwrapArray<ReturnType<typeof useTransition>>['props']

export interface RendererProps<T> extends ObjectOf<any> {
  data: T
  style: style
}

export interface Props<T> {
  renderer: React.ComponentType<RendererProps<T>>
  data: T
  x: number
  y: number
  style: style
}

export function Item<T>({ renderer: Renderer, data, style, x, y }: Props<T>) {
  const position = useSpring({
    left: `${x}px`,
    top: `${y}px`
  })

  return <Renderer data={data} style={{ ...style, ...position }} />
}
