import React from 'react'
import { Grid } from '../components/Grid'
import { animated } from 'react-spring'

import { render, cleanup, RenderResult } from 'react-testing-library'
import { wait } from 'dom-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

const itemsData = [1, 2, 3, 4, 5, 6].map(x => ({
  value: x,
  width: 50,
  height: 50
}))

function renderGrid() {
  return render(
    <div style={{ position: 'absolute' }}>
      <Grid
        items={itemsData}
        keys={(item: any) => item.value}
        renderer={({ data, style }) => (
          <animated.div style={style} data-testid="grid-item">
            {data.value}
          </animated.div>
        )}
        wrapper="section"
        data-testid="grid"
        style={{
          width: 200
        }}
      />
    </div>
  )
}

describe('<Grid />', () => {
  let elements: HTMLElement[]
  let renderResult: RenderResult

  beforeEach(async () => {
    renderResult = renderGrid()

    await wait(() => {
      elements = renderResult.getAllByTestId('grid-item')

      if (!elements.length) {
        throw new Error('Failed to render elements')
      }
    })
  })

  test('should render 6 grid items', () => {
    expect(elements).toHaveLength(itemsData.length)
    elements.map((element, index) => {
      expect(element.textContent).toBe(itemsData[index].value.toString())
    })
  })

  test('should render items on separate rows if they exceed the width of the parent', () => {
    wait(() => {
      if (
        getComputedStyle(renderResult.getByTestId('grid')).width !== '200px'
      ) {
        throw new Error('not 200')
      }
    })

    renderResult.debug()
    expect(elements[0].style.left).toBe('0px')
    expect(elements[1].style.left).toBe('50px')
    expect(elements[2].style.left).toBe('100px')
    expect(elements[3].style.left).toBe('150px')
    expect(elements[4].style.left).toBe('0px')
  })
})

test.todo('should render items on multiple rows')
