import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "../shared-components/src/components/Input/Input";
import store, { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { globalActions } from "../shared-components/src/store/global/global.actions";
import { globalSelectors } from "../shared-components/src/store/global/global.selectors";

function App() {
  const [count, setCount] = useState(0);
  const isLoading = useSelector(globalSelectors.isLoading);
  const dispatch = useAppDispatch();

  const handleLoaderToggle = () => {
    if (isLoading) {
      dispatch(globalActions.decrementLoaderCount());
    } else {
      dispatch(globalActions.incrementLoaderCount());
    }
  };
  console.log("store", store.getState());

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
    </>
  );
}

export default App;
