# 🎉 react-spring-grid 🎉

An animated `<Grid>` component built using absolute positioning and [`react-spring`](https://npm.im/react-spring). This project was also built using TypeScript so that you can safely use this component in any TypeScript project of your own.

## Usage

### Installation

To install `react-spring-grid` you will need to install this package, as well as, `react` and `react-spring`.

```bash
pnpm i react react-spring react-spring-grid

# or

yarn add react react-spring react-spring-grid
```

### Example

To utilize the `<Grid>` component you need at least 3 of the 6 following things:

<small>\* means required</small>

- **`items`\*** – An array of items (data) to be used for width and height. Each item will be passed to the `renderer`.
- **`keys`\*** – See the second argument for [react-spring's useTransition](https://www.react-spring.io/docs/hooks/use-transition). This is either a function that takes each item from `items` and returns a unique identifier, an array of unique identifiers, or `null`.
- **`renderer`\*** – A component that takes the props `data`, `style`, and `index` where `data` is an individual item from `items`, `style` is the current style for your component, and `index` is just the position of your data in the `items` array.
- **`wrapper`** – This is either a string that names an html element (i.e. `'section'` or `'article'`) or it is a component that takes the props `ref` and `style`. Defaults to `'div'`.
- **`columnGap`** – The gap used between items horizontally. Defaults to `0`
- **`rowGap`** – Same as `columnGap` but is used between rows. Defaults to `0`

```jsx
function ItemRenderer({ data, style }) {
  // Note that you must be using an `animated` element for the styles to take effect.
  // `animated` is imported from `react-spring`
  return (
    <animated.div style={style} className="Item">
      {data.value.last}, {data.value.first}
    </animated.div>
  )
}

function App() {
  // You must have the properties `width` and `height`
  // any other properties are just for you to render the element
  const [itemsData, setItemsData] = useState([
    { value: { first: 'John', last: 'Doe' }, width: 150, height: 40 },
    { value: { first: 'Jane', last: 'Dane' }, width: 50, height: 90 },
    { value: { first: 'Josh', last: 'Dosh' }, width: 100, height: 50 },
    { value: { first: 'Jill', last: 'Dill' }, width: 280, height: 55 }
  ])

  // <Grid> automatically applies `position: relative` to `wrapper`
  return (
    <Grid
      items={itemsData}
      keys={item => item.value.first}
      renderer={ItemRenderer}
      wrapper="section"
      columnGap={25}
      rowGap={50}
      // Any other properties are passed to the wrapper component
      className="Grid"
    />
  )
}
```

# License

License MIT © [Christopher H. Brown](https://github.com/ChrisBrownie55)
