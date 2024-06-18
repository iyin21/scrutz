# Select
#### usage

```js
import Select from '@components';

  <Select value={selected} onChange={setSelected} options={options}/>
```
# Example

```js
const SelectNumber = () => {
  const [selected, setSelected] = React.useState([]);
  return (
    <div>
      <div>Value: {selected}</div>

      <CustomSelect value={selected} onChange={setSelected} options={[0, 1, 2, 3, 5]} />
    </div>
  );
};

### API

This is an example of a custom select component.
It accepts all the select props and renders a custom select.

| Name        | Type            | Description                                       |
| ----------- | --------------- | -----------------------------------------------   |
| value       | props           | value for the select tag                          |
| selected    | props           | the selected value from the option                |
| onchange    | function        | function that handles the selection of the values |


