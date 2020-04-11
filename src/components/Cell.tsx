import React, { useState, useEffect } from "react";
import { useMineStore, 지뢰개수 } from "../stores/MineStore";
import { useObserver, observer } from "mobx-react";

interface PropsType {
  위치: string;
}

const Cell: React.FC<PropsType> = ({ 위치 }) => {
  const [count, setCount] = useState(0);
  const [isSafe, setIsSafe] = useState(false);
  const store = useMineStore();
  const 지뢰니 = store.지뢰들.has(위치);

  useEffect(() => {
    const 주변 = new Set();
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        주변.add(`${(위치[0] as any) * 1 + i}${(위치[1] as any) * 1 + j}`);
      }
    }
    setCount(store.지뢰들.size + 9 - new Set([...주변, ...store.지뢰들]).size);
  }, [위치, store.지뢰들]);

  const checkIsMine = () => {
    if (!store.isOver) {
      지뢰니 ? store.setIsOvesr() : setIsSafe(true);
    }
  };

  return useObserver(() => (
    <div
      data-testid={위치}
      className="cell"
      style={{ background: 지뢰니 && store.isOver ? "red" : "white" }}
      onClick={checkIsMine}
    >
      <p>
        <span>{isSafe && count}</span>
      </p>
      <span>{String(지뢰니)}</span>
    </div>
  ));
};

export default observer(Cell);
