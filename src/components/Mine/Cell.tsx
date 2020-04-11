import React, { useCallback, useMemo } from "react";
import { observer } from "mobx-react";
import { useMineStore } from "../../stores/MineStore";
import CellModel from "../../models/CellModel";
import 코드표, { 지뢰개수 } from "../../codes/code";

interface PropsType {
  info: CellModel;
}

const Cell: React.FC<PropsType> = ({ info }) => {
  const store = useMineStore();

  const checkIsMine = useCallback(() => {
    if (!store.isGameEnd) {
      store.setStartTime();
      if (info.isMine) {
        store.setIsFail();
      } else {
        info.setStatus(코드표.연칸);
        info.count === 0 && store.주변셀확인(info.주변);
      }
    }
  }, [info, store]);

  const setFlag = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      if (!store.isGameEnd) {
        store.setStartTime();
        if (info.status === 코드표.깃발 && store.남은지뢰수 <= 지뢰개수) {
          store.plus남은지뢰();
          info.setStatus(코드표.보통칸);
        } else if (store.남은지뢰수 > 0) {
          store.minus남은지뢰();
          info.setStatus(코드표.깃발);
        }
      }
    },
    [store, info]
  );

  const backgroundColor = useMemo(() => {
    if (info.isMine && store.isFail) {
      return "red";
    } else if (info.status === 코드표.연칸) {
      return "blue";
    }
    return "white";
  }, [info.isMine, store.isFail, info.status]);

  const statusText = useMemo(() => {
    if (info.isMine && store.isFail) {
      return "지뢰";
    } else if (info.status === 코드표.연칸) {
      return info.count;
    } else if (info.status === 코드표.깃발) {
      return "깃발";
    }
  }, [info.isMine, store.isFail, info.status, info.count]);

  return (
    <div
      data-testid={info.위치}
      className="cell"
      style={{ backgroundColor }}
      onClick={checkIsMine}
      onContextMenu={setFlag}
    >
      <p>
        <span
          style={{ color: backgroundColor === "white" ? "black" : "white" }}
        >
          {statusText}
        </span>
      </p>
    </div>
  );
};

export default observer(Cell);
