import { RootState } from "../root.reducers";

const isLoading = (state: RootState) =>
  state.global.commonGlobal.loaderCount > 0;

const showCalculator = (state: RootState): boolean => {
  return state.global.PosGlobal.showCalculator
}

export const globalSelectors = {
  isLoading,
  showCalculator,
};
