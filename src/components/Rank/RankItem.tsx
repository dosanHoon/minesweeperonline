import React from "react";
import { observer } from "mobx-react";

interface PropsTypes {
  name: string;
  time: number | string;
}

const RankItem: React.FC<PropsTypes> = ({ name, time }) => {
  return (
    <li>
      <div className="name">{name}</div>
      <div className="time">{time}</div>
    </li>
  );
};

export default observer(RankItem);
