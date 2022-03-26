# Batching examples to try

[Check the implementation here](https://github.com/tannerlinsley/react-query/discussions/365)

[The library does batching under the hood](https://www.npmjs.com/package/dataloader)

```js
// 200 ms
// 2 token balance
useCustomQuery("token 1", true);
useCustomQuery("token 2", true);

const useCustomQuery = (options, canBatch) => {
  // flag + 200ms => multiCall
  // result => {
  // Give it back properly to these guys
  // - useCustomQuery("token 1", true);
  // - useCustomQuery("token 2", true);
};
```
