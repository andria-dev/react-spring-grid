import React from 'react'
import { useSpring, useTransition } from 'react-spring'
import { ObjectOf, UnwrapArray } from '../generics'

type style = UnwrapArray<ReturnType<typeof useTransition>>['props']

export interface RendererProps<T> {
  data: T
  style: style
  index: number
}

export interface Props<T> {
  renderer: React.ComponentType<RendererProps<T>>
  data: T
  x: number
  y: number
  style: style
  index: number
}

export function Item<T>({
  renderer: Renderer,
  data,
  style,
  x,
  y,
  index
}: Props<T>) {
  const position = useSpring({
    left: `${x}px`,
    top: `${y}px`
  })

  return (
    <Renderer index={index} data={data} style={{ ...style, ...position }} />
  )
}
