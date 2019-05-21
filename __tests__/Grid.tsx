import React from 'react'
import { Grid } from '../components/Grid'

import { render, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

test('should render', () => {
  const { debug } = render(
    <Grid
      items={[1, 2, 3, 4, 5, 6].map(x => ({
        value: x,
        width: 100,
        height: 100
      }))}
      keys={(item: any) => item.value}
      renderer={({ data, ...props }) => <div {...props}>{data.value}</div>}
      wrapper="section"
    />
  )

  debug()
})

test.todo('should render items on multiple rows')
