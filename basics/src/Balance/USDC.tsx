import { useQuery } from "react-query";
import { contractAddresses, multiCallLoader } from "~/utils";

export const USDC: React.FunctionComponent = () => {
  const { data: USDCBalance } = useQuery(
    ["USDCBalance"],
    () =>
      multiCallLoader.load({
        address: contractAddresses.USDC,
        method: "balanceOf",
      }),
    {
      refetchInterval: 5_000,
    }
  );

  return (
    <div className="card">
      <div className="text-sm">USDC</div>
      <div className="mt-2 text-xs text-slate-400 font-semibold">
        {USDCBalance ?? "-"}
      </div>
    </div>
  );
};
