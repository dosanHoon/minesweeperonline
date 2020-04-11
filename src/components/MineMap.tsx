import React from "react";
import { useMineStore } from "../stores/MineStore";
import Cell from "./Cell";

const MineMap: React.FC = () => {
  const { mineMap } = useMineStore();
  return (
    <div className="mineMap">
      {mineMap.map((row: []) => (
        <div className="row">
          {row.map(() => (
            <Cell></Cell>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MineMap;
