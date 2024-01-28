import { RootState } from "../root.reducers";

const isLoading = (state: RootState) =>
  state.global.commonGlobal.loaderCount > 0;

export const globalSelectors = {
  isLoading,
};
