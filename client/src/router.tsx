import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import App from "./App";

import About from "./pages/About";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: App,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router;
