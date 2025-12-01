import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import App from "./App";
import Players from "./Pages/Players";
import PlayerDetails from "./Pages/PlayersDetails";
import Report from "./Pages/Report";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/players",
    element: <Players />,
  },
  {
    path: "/players/:playerId",
    element: <PlayerDetails />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
