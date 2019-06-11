import React from 'react'
import { Grid } from '../components/Grid'
import { animated } from 'react-spring'

import { render, cleanup } from 'react-testing-library'
import { wait } from 'dom-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

function renderGrid() {
  return render(
    <Grid
      items={[1, 2, 3, 4, 5, 6].map(x => ({
        value: x,
        width: 32,
        height: 32
      }))}
      keys={(item: any) => item.value}
      renderer={({ data, style }) => (
        <animated.div style={style}>{data.value}</animated.div>
      )}
      wrapper="section"
      style={{
        width: '100px'
      }}
    />
  )
}

test('should render', async () => {
  const { debug, getByText } = renderGrid()

  await wait(() => {
    if (!getByText('1').getAttribute('style')) {
      throw new Error('Style is missing')
    }
  })
  debug()
})

test.todo('should render items on multiple rows')
