import React from 'react'
import { useSpring, useTransition } from 'react-spring'
import { ObjectOf, UnwrapArray } from '../generics'

type useTransitionReturn = ReturnType<typeof useTransition>

export interface RendererProps extends ObjectOf<any> {
  data: any
  style: useTransitionReturn
}

export interface Props<T> {
  renderer: React.ComponentType<RendererProps>
  data: T
  x: number
  y: number
  style: UnwrapArray<useTransitionReturn>['props']
}

export function Item<T>({ renderer: Renderer, data, style, x, y }: Props<T>) {
  const position = useSpring({
    left: `${x}px`,
    top: `${y}px`
  })

  return <Renderer data={data} style={{ ...style, ...position }} />
}
