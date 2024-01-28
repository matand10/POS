import { RootState } from "../root-state";

const showCalculator = (state: RootState): boolean => {
  return state.global.showCalculator
}

export const globalSelectors = {
  showCalculator,
};
