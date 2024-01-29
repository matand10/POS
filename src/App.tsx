import "./App.css";
import { useSelector } from "react-redux";
import { globalSelectors } from "./store/global/global.selectors";
import { useAppDispatch } from "./store";
import { globalCommonActions } from "../../react-components/src/store/global/global.reducer";
import { globalActions } from "./store/global/global.reducer";
import { useEffect } from "react";
import { posGlobalActions } from "./store/global/global.actions";
import { Input } from "../shared-components/src";
import { sum } from "../shared-components/src/utils/common.util";


function App() {
  const isLoading = useSelector(globalSelectors.isLoading);
  const errorMessage = useSelector(globalSelectors.errorMessage);
  const showCalculator = useSelector(globalSelectors.showCalculator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(posGlobalActions.globalInitThunk())
  }, [])

  const handleLoader = () => {
    if (isLoading) {
      dispatch(posGlobalActions.decrementLoaderCount());
    } else {
      dispatch(posGlobalActions.incrementLoaderCount());
    }
  };

  const handleShowCalculator = () => {
    dispatch(posGlobalActions.setShowCalculator(!showCalculator))
  }

  const res = sum(1, 2, 3, 4)
  console.log('res', res)

  return (
    <>
      <div>
        <p>Shared Component:</p>
        <Input />
      </div>

      <div>
        <button onClick={handleLoader}>Handle loader</button>
        <p>Loader is: {`${isLoading}`}</p>
      </div>

      <div>
        <button onClick={handleShowCalculator}>Handle Calculator</button>
        <p>Show Calculator is: {`${showCalculator}`}</p>
      </div
      >
      <div>
        <p>Show errorMessage: {`${errorMessage}`}</p>
      </div>
    </>
  );
}

export default App;
