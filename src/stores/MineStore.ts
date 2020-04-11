import { observable, action } from "mobx";
import makeStore from "../utils/makeStore";

const 크기 = 8;
export const 지뢰개수 = 10;

class MineStore {
  @observable
  isOver = false;

  @action
  setIsOvesr = () => {
    this.isOver = true;
  };

  @action
  initStore = () => {
    this.isOver = false;
    this.지뢰들 = new Set();
  };

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

  @observable
  지뢰들 = new Set();

  @action
  makeNewMineMap = () => {
    this.initStore();
    while (this.지뢰들.size < 지뢰개수) {
      this.지뢰들.add(
        `${Math.floor(Math.random() * 크기)}${Math.floor(Math.random() * 크기)}`
      );
    }
  };
}

export default MineStore;

const [MineStoreContext, MineStoreProvider, useMineStore] = makeStore(
  MineStore,
  "MineStore"
);

export { MineStoreContext, MineStoreProvider, useMineStore };
