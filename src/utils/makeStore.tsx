import React from "react";
import createContext from "./createContext";
import { useObserver, useLocalStore } from "mobx-react";
import { useMobxStore } from "../hooks";

export default function <TStore>(storeConstructor: any, name: string): any[] {
  const storeContext = createContext<TStore | null>(null, `${name}Context`);

  const storeProvider: React.FC = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const store: TStore = useLocalStore(() => new storeConstructor());
    return (
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    );
  };

  const useStore = () => {
    const store = useMobxStore(storeContext);

    if (!store) {
      throw `${name}Store가 없습니다`;
    }

    return useObserver(() => store);
  };

  return [storeContext, storeProvider, useStore];
}
