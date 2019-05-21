import React, { useRef } from 'react'
import { useTransition } from 'react-spring'
import useMeasure from 'use-measure'

import { Item, Props as ItemProps } from './Item'
import { ObjectOf, Component } from '../generics'

type useTransitionParams = Parameters<typeof useTransition>
export interface RequiredItemFields {
  width: number
  height: number
}

export interface Props<T extends RequiredItemFields> extends ObjectOf<any> {
  items: T[]
  keys: useTransitionParams[1]
  renderer: ItemProps<T>['renderer']
  wrapper?: Component
}

export function Grid<T extends RequiredItemFields>({
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

  let x = items.length || -items[0].width
  let y = 0
  let tallestInRow = 0

  return (
    <Component
      ref={containerRef}
      style={{ ...style, position: 'relative' }}
      {...props}
    >
      {transition.map(({ item, key, props }, index) => {
        x += item.width
        if (item.height > tallestInRow) {
          tallestInRow = item.height
        }

        if (
          index + 1 < items.length &&
          x + items[index + 1].width > containerWidth
        ) {
          y += tallestInRow
          tallestInRow = 0
        }

        return (
          <Item<T>
            key={key}
            renderer={ItemRenderer}
            data={item}
            style={props}
            x={x}
            y={y}
          />
        )
      })}
    </Component>
  )
}
