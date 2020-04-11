// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { MineStoreProvider, MineStoreContext } from "../stores/MineStore";
// import MineMap from "./MineMap";

// function setUp(init?: Function) {
//   const container = render(
//     <MineStoreProvider>
//       <MineStoreContext.Consumer>
//         {(store) => {
//           init && init(store);
//           return <MineMap />;
//         }}
//       </MineStoreContext.Consumer>
//     </MineStoreProvider>
//   );

//   const 안지뢰 = container.getAllByText("false");
//   const 지뢰 = container.getAllByText("true");
//   const 남은지뢰수 = container.getByTestId("남은지뢰수");

//   return { container, 안지뢰, 지뢰 };
// }

// describe("<Cell />", () => {
//   it("지뢰 클릭 테스트 시 액션", () => {
//     const { container, 안지뢰, 지뢰 } = setUp();

//     fireEvent.click(안지뢰);
//     expect(안지뢰).toHaveTextContent("1");
//     // container.getAllByText("1");
//     fireEvent.click(지뢰);
//     console.log("지뢰.style.background====", 지뢰.style.background);
//     expect(지뢰.style.background).toBe("red");
//   });

//   // it("셀 우클릭시 테스트", () => {
//   //   const { container, 안지뢰, 지뢰 } = setUp();
//   //   fireEvent.contextMenu(안지뢰);
//   //   container.getAllByText("9");
//   //   container.getByText("깃발");

//   //   fireEvent.contextMenu(지뢰);
//   //   container.getAllByText("깃발");
//   //   container.getByText("8");

//   //   fireEvent.contextMenu(안지뢰);
//   //   container.getByText("9");
//   //   container.getByText("깃발");
//   // });

//   // it("셀 우클릭시 테스트 1", () => {
//   //   const { container, 안지뢰, 지뢰 } = setUp();
//   //   fireEvent.contextMenu(안지뢰);
//   //   container.getByText("9");
//   //   container.getByText("깃발");

//   //   fireEvent.contextMenu(지뢰);
//   //   container.getAllByText("깃발");
//   //   container.getByText("8");

//   //   fireEvent.contextMenu(안지뢰);
//   //   container.getByText("9");
//   //   container.getByText("깃발");
//   // });

//   // it("셀 우클릭시 테스트 2", () => {
//   //   const { container, 안지뢰 } = setUp((store) => {
//   //     store.남은지뢰수 = 0;
//   //   });

//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);
//   //   fireEvent.contextMenu(안지뢰);

//   //   container.getByText("0");
//   //   container.getByText("깃발");
//   // });

//   // it("다시하기 누르면 초기화", () => {
//   //   const { container, 안지뢰 } = setUp();

//   //   fireEvent.contextMenu(안지뢰);

//   //   container.getByText("깃발");

//   //   const btn = container.getByText("다시하기");
//   //   fireEvent.click(btn);
//   //   container.getByText("깃발");
//   // });
// });
