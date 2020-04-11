import React, { useState } from "react";
import { useLocalStore, observer } from "mobx-react";
import RankStore from "../stores/RankStore";
import { useMineStore } from "../stores/MineStore";

const Rank: React.FC = () => {
  const { playTime, isSuccess } = useMineStore();
  const state = useLocalStore(() => new RankStore());
  const [name, setName] = useState("");
  return (
    <div className="랭커">
      <h1>랭커</h1>
      <p>성공하면 순위에 이름을 입력하세요</p>
      <ul>
        <li>
          <div className="name">{"이름"}</div>
          <div className={"time"}>시간("초")</div>
        </li>
        {state.sorted랭커들.map((ranker, i) => {
          return (
            <li key={i}>
              <div className="name">{ranker.name}</div>
              <div className={"time"}>{ranker.time}</div>
            </li>
          );
        })}
      </ul>
      {isSuccess && (
        <>
          <p>이름을 입력 해주세요</p>
          <input
            className="rank"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="rank"
            onClick={() => state.뉴랭커({ name, time: playTime })}
          >
            등록
          </button>
        </>
      )}
    </div>
  );
};

export default observer(Rank);
