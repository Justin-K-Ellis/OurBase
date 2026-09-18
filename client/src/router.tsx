import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import App from "./App";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
