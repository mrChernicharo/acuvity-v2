import { createBrowserRouter } from "react-router-dom";
import { RootView } from "./components/views/Root";
import { UserView } from "./components/views/user";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
  },
  {
    path: "/user/:id",
    element: <UserView />,
  },
]);
