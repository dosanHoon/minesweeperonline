import { observable, action, computed } from "mobx";

interface 랭커 {
  name: string;
  time: number;
}
class RankStore {
  @observable
  랭커들: 랭커[] = [];

  @computed
  get sorted랭커들() {
    return this.랭커들.sort(({ time: Btime }, { time: Atime }) => {
      return Btime * 1 - Atime * 1;
    });
  }

  @action
  뉴랭커 = (ranker: 랭커) => {
    this.랭커들.push(ranker);
  };
}

export default RankStore;
