import React, { useRef } from 'react'
import { useTransition } from 'react-spring'
import useMeasure from 'use-measure'

import { Item } from './Item'
import { ObjectOf, Component } from '../generics'

type useTransitionParams = Parameters<typeof useTransition>

export interface Props<T> extends ObjectOf<any> {
  items: T | T[]
  keys: useTransitionParams[1]
  renderer: Parameters<typeof Item>[0]['renderer']
  wrapper: Component
}

export function Grid<T>({
  items,
  keys,
  renderer: ItemRenderer,
  wrapper: Component = 'section',
  style,
  ...props
}: Props<T>) {
  const transition = useTransition<T, React.CSSProperties>(items, keys, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const containerRef = useRef(null)
  const { width: containerWidth } = useMeasure(containerRef)

  let x = 0
  let y = 0

  return (
    <Component
      ref={containerRef}
      style={{ ...style, position: 'relative' }}
      {...props}
    >
      {transition.map(({ item, key, props }) => (
        <Item<T>
          key={key}
          renderer={ItemRenderer}
          data={item}
          style={props}
          x={x}
          y={y}
        />
      ))}
    </Component>
  )
}
