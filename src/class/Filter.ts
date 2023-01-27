import { ISelectedFilter } from "../components/Filters/FilterComponent";
import { FILTER } from "../constants/app-constants";

export interface IFilter {
  initialFilter: ISelectedFilter;
  getNewFilter: (filter: ISelectedFilter, index: number) => ISelectedFilter;
}
export class Filter implements IFilter {
  private deselectedFilter: ISelectedFilter;

  constructor(filterLength: number) {
    this.deselectedFilter = new Array(filterLength).fill(FILTER.DESELECTED);
  }

  get initialFilter() {
    const newFilter = [...this.deselectedFilter];
    newFilter[0] = FILTER.SELECTED;
    return newFilter;
  }

  getNewFilter(filter: ISelectedFilter, index: number) {
    return index === 0
      ? this.initialFilter
      : this.updateFilterByIndex(filter, index);
  }

  private updateFilterByIndex(filter: ISelectedFilter, index: number) {
    const newFilter = [...filter];
    newFilter[0] = FILTER.DESELECTED;
    newFilter[index] = this.toggleSelect(newFilter[index]);

    if (this.isInitializeFilter(newFilter)) {
      return this.initialFilter;
    }

    return newFilter;
  }

  private isInitializeFilter(allFilter: ISelectedFilter) {
    const countSelected = allFilter
      .slice(1)
      .filter((filterItem) => filterItem === FILTER.SELECTED).length;

    return this.isAllSelectedOrAllDeselected(countSelected) ? true : false;
  }

  private isAllSelectedOrAllDeselected(countSelected: number) {
    const filterLength = this.deselectedFilter.length - 1;
    return countSelected === filterLength || countSelected === 0;
  }

  private toggleSelect(isSelected: string) {
    return isSelected === FILTER.SELECTED ? FILTER.DESELECTED : FILTER.SELECTED;
  }
}
