import React from 'react'
import { useSpring, useTransition } from 'react-spring'

interface Props<T> {
  component: any
  data: T
  x: number
  y: number
  style: ReturnType<typeof useTransition>
}

function Item<T>({ component: Component, data, style, x, y }: Props<T>) {
  const position = useSpring({
    left: `${x}px`,
    top: `${y}px`
  })

  return <Component data={data} style={{ ...style, ...position }} />
}

export { Item }
