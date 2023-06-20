import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { SignedInPage } from "./pages/signedIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signedIn",
    element: <SignedInPage />,
  },
]);
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
