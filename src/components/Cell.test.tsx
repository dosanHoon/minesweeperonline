import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MineStoreProvider, MineStoreContext } from "../stores/MineStore";
import MineMap from "./MineMap";

describe("<Cell />", () => {
  it("지뢰 클릭 테스트", () => {
    const container = render(
      <MineStoreProvider>
        <MineStoreContext.Consumer>
          {({ 지뢰들 }) => {
            지뢰들.add("01");
            return <MineMap />;
          }}
        </MineStoreContext.Consumer>
      </MineStoreProvider>
    );

    const 안지뢰 = container.getByTestId("02");
    fireEvent.click(안지뢰);
    container.getByText("1");
    const 지뢰 = container.getByTestId("01");
    fireEvent.click(지뢰);
    expect(지뢰.style.background).toBe("red");
  });
});
