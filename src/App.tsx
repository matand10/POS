import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "../shared-components/src/components/Input/Input";
import { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { globalActions } from "./store/my-global/global.actions";
import { commonGlobalSelectors } from "../../react-components/src/store/global/global.selectors"
import { globalSelectors } from "./store/my-global/global.selectors";

function App() {
  const [count, setCount] = useState(0);
  const isLoading = useSelector(commonGlobalSelectors.isLoading);
  const showCalculator = useSelector(globalSelectors.showCalculator)
  const dispatch = useAppDispatch();

  const handleLoaderToggle = () => {
    if (isLoading) {
      dispatch(globalActions.decrementLoaderCount());
    } else {
      dispatch(globalActions.incrementLoaderCount());
    }
  };

  const handleCalculator = () => {
    dispatch(globalActions.setShowCalculator(!showCalculator));
  };

  console.log('isLoading', isLoading)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Input />
      <button onClick={handleLoaderToggle}>Press to user loader</button>
      {isLoading && <p>Loading now</p>}

      <button onClick={handleCalculator}>Handle showCalculator</button>
      <p>showCalculator is - {`${showCalculator}`}</p>
    </>
  );
}

export default App;
