# useForm Hook

*Custom Hook to control changes in input forms*

Use example:
```
const { values, handleInputChange, reset } =  useForm(initialValue = {})
```

Params:
* initialValue - Object (optional) - Initial input values

Return:
* values - Object - Current input values
* handleInputChange - Function - Method to refresh input values
* reset - Function - Method to reset all input values
