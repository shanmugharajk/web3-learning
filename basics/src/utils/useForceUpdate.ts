import React from "react";

export const useForceUpdate = () => {
  const [, forceUpdate] = React.useReducer((c) => c + 1, [0]);
  return forceUpdate;
};
