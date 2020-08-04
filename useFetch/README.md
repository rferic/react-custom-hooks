# useFetch Hook

*Custom Hook to call get request*

Use example:
```
const { data, error, loading } =  useFetch(url)
```

Params:
* url - String (required)

Return:
* data - Object (nullable) - Response request
* error - String (nullable) - Error messsage
* loading - Boolean - Status request
