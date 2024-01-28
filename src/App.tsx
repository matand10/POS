import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "../shared-components/src/components/Input/Input";
import { useSelector } from "react-redux";
import { globalSelectors } from "./store/global/global.selectors";
import { useAppDispatch } from "./store";
import { commonGlobalActions } from "../../react-components/src/store/global/global.reducer";

function App() {
  const isLoading = useSelector(globalSelectors.isLoading);
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();

  const handleLoader = () => {
    console.log("Entering");
    if (isLoading) {
      dispatch(commonGlobalActions.decrementLoaderCount());
    } else {
      dispatch(commonGlobalActions.incrementLoaderCount());
    }
  };

  console.log("isLoading", isLoading);

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

      <button onClick={handleLoader}>Handle loader</button>
    </>
  );
}

export default App;
