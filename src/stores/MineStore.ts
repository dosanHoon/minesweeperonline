import { observable } from "mobx";
import makeStore from "../utils/makeStore";

class MineStore {
  @observable
  mineMap = [
    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
}

export default MineStore;

const [MineStoreContext, MineStoreProvider, useMineStore] = makeStore(
  MineStore,
  "MineStore"
);

export { MineStoreContext, MineStoreProvider, useMineStore };
