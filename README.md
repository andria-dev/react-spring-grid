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

To utilize the `<Grid>` component you need at least 3 of the 4 following things:

- **`items`** – An array of items (data) to be used for width and height. Each item will be passed to the `renderer`.
- **`keys`** – See the second argument for [react-spring's useTransition](https://www.react-spring.io/docs/hooks/use-transition). This is either a function that takes each item from `items` and returns a unique identifier, an array of unique identifiers, or `null`.
- **`renderer`** – A component that takes the props `data`, `style`, and `index` where `data` is an individual item from `items`, `style` is the current style for your component, and `index` is just the position of your data in the `items` array.
- **`wrapper`** – This is either a string that names an html element (i.e. `'section'` or `'article'`) or it is a component that takes the props `ref` and `style`.

```jsx
function App() {
  const [itemsData, setItemsData] = useState([
    { value: { first: 'John', last: 'Doe' }, width: 50, height: 50 },
    { value: { first: 'Jane', last: 'Dane' }, width: 50, height: 50 },
    { value: { first: 'Josh', last: 'Dosh' }, width: 50, height: 50 },
    { value: { first: 'Jill', last: 'Dill' }, width: 50, height: 50 }
  ])

  return (
    <div style={{ position: 'absolute' }}>
      <Grid
        items={itemsData}
        keys={item => item.value}
        renderer={({ data, style }) => (
          <animated.div style={style}>{data.value}</animated.div>
        )}
        wrapper="section"
      />
    </div>
  )
}
```
