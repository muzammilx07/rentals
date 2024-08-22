import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import { Provider } from "react-redux";
import {store} from './Redux/Store/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
