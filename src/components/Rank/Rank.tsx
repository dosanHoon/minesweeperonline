import React, { useState, useCallback } from "react";
import { useLocalStore, observer } from "mobx-react";
import RankStore from "../../stores/RankStore";
import { useMineStore } from "../../stores/MineStore";
import RankItem from "./RankItem";

const Rank: React.FC = () => {
  const { playTime, isSuccess } = useMineStore();
  const state = useLocalStore(() => new RankStore());

  const [name, setName] = useState("");

  const onSubmit = useCallback(() => {
    state.뉴랭커({ name, time: playTime });
    setName("");
  }, [state, name, playTime]);

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  
  return (
    <div className="랭커">
      <h1>랭커</h1>
      <p>성공하면 순위에 이름을 입력하세요</p>
      {state.sorted랭커들 && (
        <ul>
          <RankItem name="이름" time={`시간("초")`} />
          {state.sorted랭커들.map(({ name: rankerName, time }, i) => {
            return <RankItem key={i} name={rankerName} time={time} />;
          })}
        </ul>
      )}
      {isSuccess && (
        <>
          <p>이름을 입력 해주세요</p>
          <input className="rank" value={name} onChange={onChangeName} />
          <button className="rank" onClick={onSubmit}>
            등록
          </button>
        </>
      )}
    </div>
  );
};

export default observer(Rank);
