import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Toggle from "./components/Toggle.jsx";
import { elements } from "chart.js";

const router = createBrowserRouter([{
  path: "/animation/",
  element: <App/>,
  children: [
    {
      path: "/animation/",
      element: <Toggle/>,
    }
  ]

}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
