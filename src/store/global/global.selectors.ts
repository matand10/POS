import { RootState } from "../root.reducers";

const isLoading = (state: RootState) =>
  state.global.loaderCount;

const showCalculator = (state: RootState): boolean => {
  return state.global.showCalculator
}

const errorMessage = (state: RootState): string | undefined | null => {
  return state.global.error
}

export const globalSelectors = {
  isLoading,
  showCalculator,
  errorMessage,
};
