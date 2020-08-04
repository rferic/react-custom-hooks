# useCounter Hook

*Custom Hook to manipulate a counter with a increment factor*

Use example:
```
const { counter, increment, decrement, reset } =  useCounter(defaultValue = 0)
```

Params:
* defaultValue - Int (optional => default is 0)

Return:
* counter - Int
* increment - Function (factor = 1)
* decrement - Function (factor = 1)
* reset - Function
