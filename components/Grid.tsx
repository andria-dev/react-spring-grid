import React, { useRef } from 'react'
import { useTransition, UseTransitionProps } from 'react-spring'
import useMeasure from 'use-measure'

import { Item, Props as ItemProps } from './Item'
import { ObjectOf, Component } from '../generics'

type keys<T> =
  | string
  | number
  | readonly (string | number)[]
  | ((item: T) => string | number)
  | null
export interface RequiredItemFields {
  width: number
  height: number
}

export interface Props<T extends RequiredItemFields> extends ObjectOf<any> {
  items: T[]
  keys: keys<T>
  renderer: ItemProps<T>['renderer']
  wrapper?: Component
  columnGap?: number
  rowGap?: number
}

export function Grid<T extends RequiredItemFields>({
  items,
  keys,
  renderer: ItemRenderer,
  wrapper: Component = 'section',
  style,
  columnGap = 0,
  rowGap = 0,
  ...props
}: Props<T>) {
  const transition = useTransition<T, React.CSSProperties>(items, keys, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const containerRef = useRef(null)
  const { width: containerWidth } = useMeasure(containerRef)

  let x = 0
  let y = 0
  let tallestInRow = 0

  return (
    <Component
      ref={containerRef}
      style={{ ...style, position: 'relative' }}
      {...props}
    >
      {containerWidth
        ? transition.map(({ item, key, props }, index) => {
            const currentX = x
            const currentY = y

            x += item.width + columnGap
            if (item.height > tallestInRow) {
              tallestInRow = item.height
            }

            // if end of the item is past the end of the container
            if (x + item.width > containerWidth) {
              y += tallestInRow + rowGap
              tallestInRow = 0
              x = 0
            }

            return (
              <Item<T>
                key={key}
                renderer={ItemRenderer}
                data={item}
                index={index}
                style={{ ...props, width: item.width, height: item.height }}
                x={currentX}
                y={currentY}
              />
            )
          })
        : null}
    </Component>
  )
}
