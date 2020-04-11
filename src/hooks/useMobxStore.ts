import React from "react";

// mobx 상태 가져오는 hook 공통으로 사용함
function useMobxStore<T>(storeContext: React.Context<T>) {
  const store = React.useContext<T>(storeContext);
  if (!store) {
    throw Error(`Cannot find ${storeContext.displayName} In Cotnext Provider`);
  }
  return store;
}

export default useMobxStore;
