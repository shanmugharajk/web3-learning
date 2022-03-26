import { useQuery } from "react-query";
import { contractAddresses, multiCallLoader } from "~/utils";

export const DAI: React.FunctionComponent = () => {
  const { data: DAIBalance } = useQuery(
    ["DAIBalance"],
    () =>
      multiCallLoader.load({
        address: contractAddresses.DAI,
        method: "balanceOf",
      }),
    {
      refetchInterval: 5_000,
    }
  );

  return (
    <div className="card">
      <div className="text-sm">DAI</div>
      <div className="mt-2 text-xs text-slate-400 font-semibold">
        {DAIBalance ?? "-"}
      </div>
    </div>
  );
};
