# List of tasks todo

Create a hook `useFetchMultiCall` with the below design

```js
// implementation
type Query = {
  [address: string]: string[]
}

type QueryInfo = {
  id: string;
  queries: Query[]
}

useFetchMultiCall(queryInfo: QueryInfo) {
  return useQuery([queryInfo.id], () => {
    return multicallLoader.load(queryInfo)
  }, {
    refetchInterval: 5_000 // from constants
  })
}
```

So it can be called with

```js
const { data } = useFetchMultiCall({
  id: "uniqueId",
  queryies: [{[address]: ["balanceOf]}]
});
```

## Batching

Batching should return the results mapped to the id sent in the param. Update the current batch to accomodate this.

## Items needs to be Context / global (all hooks needs this)

- Wallet address
- Provider instance

  - Web3ProviderInstance
    - by default we use this? for all fecthing
    - if this fails the change the provider to RPC? How we do this?
  - RPCProviderInstance

  - EthcallProvider
    - This should be initialised only once and only be set whenever the provider changes.
    - Then our multicall should always get the latest provider instance.
