import { combineQueries } from "../utlis/query-fn";

describe("combine queries test", () => {
  test("각 쿼리가 2 개 이상일 때", () => {
    const colorQueies = ["color=Black", "color=White"];
    const priceQueries = [
      "max_price=100000",
      "min_price=100001&max_price=150000",
    ];
    const expectedResult = [
      "?color=Black&max_price=100000",
      "?color=Black&min_price=100001&max_price=150000",
      "?color=White&max_price=100000",
      "?color=White&min_price=100001&max_price=150000",
    ];

    const result = combineQueries(colorQueies, priceQueries);
    expect(result).toEqual(expectedResult);
  });

  test("각 쿼리가 1 개일 때", () => {
    const colorQueies = ["color=Black"];
    const priceQueries = ["max_price=100000"];
    const expectedResult = ["?color=Black&max_price=100000"];

    const result = combineQueries(colorQueies, priceQueries);
    expect(result).toEqual(expectedResult);
  });
  test("각 쿼리가  All 일 때", () => {
    const colorQueies = [""];
    const priceQueries = [""];
    const expectedResult = [""];

    const result = combineQueries(colorQueies, priceQueries);
    expect(result).toEqual(expectedResult);
  });
  test("색깔 쿼리만  All 일 때", () => {
    const colorQueies = [""];
    const priceQueries = [
      "max_price=100000",
      "min_price=100001&max_price=150000",
    ];
    const expectedResult = [
      "?max_price=100000",
      "?min_price=100001&max_price=150000",
    ];

    const result = combineQueries(colorQueies, priceQueries);
    expect(result).toEqual(expectedResult);
  });
  test("가격 쿼리만  All 일 때", () => {
    const colorQueies = ["color=Black", "color=White"];
    const priceQueries = [""];
    const expectedResult = ["?color=Black", "?color=White"];

    const result = combineQueries(colorQueies, priceQueries);
    expect(result).toEqual(expectedResult);
  });
});
