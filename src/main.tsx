import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { injectStore } from "../shared-components/src/services/api/interceptor.ts";

injectStore(store);
// injectGlobalActions(globalSlice.actions);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
