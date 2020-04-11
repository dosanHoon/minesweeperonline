import React from "react";
import { observer } from "mobx-react";
import { useMineStore } from "../../stores/MineStore";
import Cell from "./Cell";
import CellModel from "../../models/CellModel";
import Rank from "../Rank/Rank";

const MineMap: React.FC = () => {
  const {
    isSuccess,
    mineMap,
    makeNewMineMap,
    남은지뢰수,
    playTime,
  } = useMineStore();
  return (
    <>
      <div className="mineMap">
        <h2>{isSuccess && "성공입니다."}</h2>
        <h2>"경과시간" : {playTime}</h2>
        <h2 data-testid={"남은지뢰수"}>"남은지뢰수" : {남은지뢰수}</h2>
        <div>
          {mineMap.map((row: [], r: number) => (
            <div className="row" key={r}>
              {row.map((info: CellModel, c) => (
                <Cell key={`${r}${c}`} info={info}></Cell>
              ))}
            </div>
          ))}
        </div>
        <button onClick={makeNewMineMap}>다시하기</button>
      </div>
      <Rank />
    </>
  );
};

export default observer(MineMap);
