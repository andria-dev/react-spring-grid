import React, { useRef } from 'react'
import { useTransition } from 'react-spring'
import useMeasure from 'use-measure'

import { Item } from './Item'

type useTransitionParams = Parameters<typeof useTransition>

export interface Props<T> {
  items: useTransitionParams[0]
  keys: useTransitionParams[1]
  children: JSX.IntrinsicElements | JSX.ElementClass
  component: Parameters<typeof Item>[0]['component']
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
        <Item component={ItemRenderer} data={item} style={props} x={x} y={y} />
      ))}
    </Component>
  )
}

export { Grid }
