import { atom, selector } from "recoil";
import { FILTER_COLOR, FILTER_PRICE } from "../constants/api-constants";
import { IQueries } from "../type/types";
import { combineQueries } from "../utlis/query-fn";

const colorQueryState = atom<IQueries>({
  key: "colorQueryState",
  default: [""],
});

const priceQueryState = atom<IQueries>({
  key: "priceQueryState",
  default: [""],
});

export const queryState = {
  [FILTER_COLOR.ENG]: colorQueryState,
  [FILTER_PRICE.ENG]: priceQueryState,
};

export const querySelector = selector({
  key: "querySelector",
  get: ({ get }) => {
    const colorQueries = get(colorQueryState);
    const priceQueries = get(priceQueryState);
    return combineQueries(colorQueries, priceQueries);
  },
});
