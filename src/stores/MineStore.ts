import { observable, action, computed } from "mobx";
import makeStore from "../utils/makeStore";
import CellModel from "../models/CellModel";
import 코드표, { 지뢰개수, 크기 } from "../codes/code";

class MineStore {
  constructor() {
    this.makeNewMineMap();
  }
  @observable
  남은지뢰수 = 지뢰개수;

  @action
  minus남은지뢰 = () => this.남은지뢰수 > 0 && --this.남은지뢰수;

  @action
  plus남은지뢰 = () => this.남은지뢰수 < 지뢰개수 && ++this.남은지뢰수;

  @observable
  isFail = false;

  @computed
  get isGameEnd() {
    return this.isFail || this.isSuccess;
  }

  @action
  setIsFail = () => (this.isFail = true);

  //빈셀 클릭시 주변 셀 열어주기
  @action
  주변셀확인 = (위치들: Set<string>) => {
    위치들.forEach((value: any) => {
      const cell = this.mineMap[value[0]]
        ? this.mineMap[value[0]][value[1]]
        : false;

      if (cell && !cell.isMine) {
        cell.setStatus(코드표.연칸);
      }
    });
  };

  @computed
  get isSuccess() {
    return (
      this.남은지뢰수 === 0 &&
      !this.isFail &&
      !this.mineMap.some((row) =>
        row.some((cell: CellModel) => cell.status === 코드표.보통칸)
      )
    );
  }

  @action
  initStore = () => {
    this.isFail = false;
    this.지뢰들 = new Set();
    this.남은지뢰수 = 지뢰개수;
  };

  @observable
  mineMap: CellModel[][] = [];

  @observable
  지뢰들: Set<string> = new Set();

  @action
  addNewMine = () => {
    while (this.지뢰들.size < 지뢰개수) {
      this.지뢰들.add(
        `${Math.floor(Math.random() * 크기)}${Math.floor(Math.random() * 크기)}`
      );
    }
  };

  @action
  newMap = () => {
    const newMap = [];
    for (let i = 0; i < 크기; i++) {
      const row = [];
      for (let j = 0; j < 크기; j++) {
        row.push(new CellModel(i, j, this.지뢰들));
      }
      newMap.push(row);
    }
    this.mineMap = newMap;
  };

  @action
  makeNewMineMap = () => {
    this.initStore();
    this.addNewMine();
    this.newMap();
  };
}

export default MineStore;

const [MineStoreContext, MineStoreProvider, useMineStore] = makeStore(
  MineStore,
  "MineStore"
);

export { MineStoreContext, MineStoreProvider, useMineStore };
