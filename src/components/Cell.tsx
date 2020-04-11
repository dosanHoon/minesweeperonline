import React from "react";
import { useObserver, observer } from "mobx-react";
import { useMineStore } from "../stores/MineStore";
import CellModel from "../models/CellModel";
import 코드표, { 지뢰개수 } from "../codes/code";

interface PropsType {
  info: CellModel;
}

const Cell: React.FC<PropsType> = ({ info }) => {
  const store = useMineStore();

  const checkIsMine = () => {
    store.setStartTime();
    if (!store.isGameEnd && info.isMine) {
      store.setIsFail();
    } else if (!store.isGameEnd) {
      info.setStatus(코드표.연칸);
      info.count === 0 && store.주변셀확인(info.주변);
    }
  };

  const setFlag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    store.setStartTime();
    if (!store.isFail) {
      if (info.status === 코드표.깃발 && store.남은지뢰수 > 지뢰개수) {
        store.plus남은지뢰();
        info.setStatus(코드표.보통칸);
      } else if (store.남은지뢰수 > 0) {
        store.minus남은지뢰();
        info.setStatus(코드표.깃발);
      }
    }
  };

  return useObserver(() => (
    <div
      data-testid={info.위치}
      className="cell"
      style={{
        background:
          info.isMine && store.isFail
            ? "red"
            : info.status === 코드표.연칸
            ? "blue"
            : "white",
      }}
      onClick={checkIsMine}
      onContextMenu={setFlag}
    >
      <p>
        <span>{info.isMine && store.isFail && "지뢰"}</span>
      </p>
      <p>
        <span>{info.status === 코드표.연칸 && info.count}</span>
      </p>
      <p>
        <span>{info.status === 코드표.깃발 && "깃발"}</span>
      </p>
    </div>
  ));
};

export default observer(Cell);
