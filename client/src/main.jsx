import './style.css'

import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
//import { store } from "./store/store.js";
//import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
        <App />
);



/*
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
*/


