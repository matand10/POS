import "./App.css";
import Input from "../shared-components/src/components/Input/Input";
import { useSelector } from "react-redux";
import { globalSelectors } from "./store/global/global.selectors";
import { useAppDispatch } from "./store";
import { globalCommonActions } from "../../react-components/src/store/global/global.reducer";
import { globalActions } from "./store/global/global.reducer";

function App() {
  const isLoading = useSelector(globalSelectors.isLoading);
  const showCalculator = useSelector(globalSelectors.showCalculator);
  const dispatch = useAppDispatch();

  const handleLoader = () => {
    if (isLoading) {
      dispatch(globalCommonActions.decrementLoaderCount());
    } else {
      dispatch(globalCommonActions.incrementLoaderCount());
    }
  };

  const handleShowCalculator = () => {
    dispatch(globalActions.setShowCalculator(!showCalculator))
  }

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
      </div>
    </>
  );
}

export default App;
