import "./App.css";
import { useSelector } from "react-redux";
import { globalSelectors } from "./store/global/global.selectors";
import { useAppDispatch } from "./store";
import { useEffect } from "react";
import { posGlobalActions } from "./store/global/global.actions";
import { Input } from "../shared-components/src";
import { handleLoader } from "../shared-components/src/services/api/interceptor";
import { globalActions } from "./store/global/global.reducer";

function App() {
  const isLoading = useSelector(globalSelectors.isLoading);
  const errorMessage = useSelector(globalSelectors.errorMessage);
  const showCalculator = useSelector(globalSelectors.showCalculator);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(globalActions.);
  }, []);

  const handleInterceptor = () => {
    handleLoader(undefined, isLoading);
  };

  const handleShowCalculator = () => {
    dispatch(posGlobalActions.setShowCalculator(!showCalculator));
  };

  return (
    <>
      <div>
        <p>Shared Component:</p>
        <Input />
      </div>

      <div>
        <button onClick={handleInterceptor}>Handle loader</button>
        <p>Loader is: {`${isLoading}`}</p>
      </div>

      <div>
        <button onClick={handleShowCalculator}>Handle Calculator</button>
        <p>Show Calculator is: {`${showCalculator}`}</p>
      </div>
      <div>
        <p>Show errorMessage: {`${errorMessage}`}</p>
      </div>
    </>
  );
}

export default App;
