import { observable, computed, action } from "mobx";

export default class CellModel {
  constructor(i: number, j: number, 지뢰들: Set<string>) {
    //model에서 직접 store 에 접근하는 것은 지양한다.
    this.위치 = `${i}${j}`;
    this.지뢰들 = 지뢰들;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        this.주변.add(
          `${(this.위치[0] as any) * 1 + i}${(this.위치[1] as any) * 1 + j}`
        );
      }
    }
    this.count = 지뢰들.size + 9 - new Set([...this.주변, ...지뢰들]).size;
  }
  @computed
  get isMine() {
    return this.지뢰들.has(this.위치);
  }

  @action
  setStatus = (code: number) => {
    this.status = code;
  };

  @observable
  위치 = "";

  //주변지뢰개수
  @observable
  count = 0;

  @observable
  status = 0;

  //주변포지션
  @observable
  주변: Set<string> = new Set();

  //store 에서 받은 지뢰들의 위치 정보
  @observable
  지뢰들: Set<string>;
}
