import { ISelectedFilter } from "../components/Filters/FilterComponent";
import { QUERY } from "../constants/api-constants";
import { FILTER } from "../constants/app-constants";
import { IQueries } from "../type/types";

export const getQueriesByTitle = (title: string, filter: ISelectedFilter) => {
  return QUERY[title].filter(
    (color, index) => filter[index] === FILTER.SELECTED
  );
};

export const combineQueries = (
  colorQueries: IQueries,
  priceQueries: IQueries
) => {
  let result: IQueries = [];
  colorQueries.forEach((colorQuery) => {
    priceQueries.forEach((priceQuery) => {
      result.push(makeQuery(colorQuery, priceQuery));
    });
  });

  return result;
};

const makeQuery = (colorQuery: string, priceQuery: string) => {
  if (colorQuery === "" && priceQuery === "") {
    return "";
  }

  if (colorQuery === "" || priceQuery === "") {
    return `?${colorQuery}${priceQuery}`;
  }

  return `?${colorQuery}&${priceQuery}`;
};
