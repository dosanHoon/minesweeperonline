import React from "react";
import { useMineStore } from "../stores/MineStore";
import Cell from "./Cell";

const MineMap: React.FC = () => {
  const { mineMap, makeNewMineMap } = useMineStore();
  return (
    <div className="mineMap">
      {mineMap.map((row: [], r: number) => (
        <div className="row" key={r}>
          {row.map((_, c) => (
            <Cell key={`${r}${c}`} 위치={`${r}${c}`}></Cell>
          ))}
        </div>
      ))}
      <button onClick={makeNewMineMap}>다시하기</button>
    </div>
  );
};

export default MineMap;
