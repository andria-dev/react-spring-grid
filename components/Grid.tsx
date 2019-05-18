import React, { useRef } from 'react'
import { useTransition } from 'react-spring'
import useMeasure from 'use-measure'

import { Item } from './Item'

export interface Props<T> {
  items: T[]
  keys: ((item: T) => any) | any[]
  children: any
  component: any
  [s: string]: any
}

function Grid<T>({
  items,
  keys,
  children: ItemRenderer,
  component: Component = 'section',
  style,
  ...props
}: Props<T>) {
  const transition = useTransition(items, keys, {
    // @ts-ignore
    from: { opacity: 0 },
    // @ts-ignore
    enter: { opacity: 1 },
    // @ts-ignore
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
        <Item component={ItemRenderer} data={item} style={props} x={x} y={y} />
      ))}
    </Component>
  )
}

export { Grid }
