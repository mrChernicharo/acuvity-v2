import { createBrowserRouter } from "react-router-dom";
import { RootView } from "./components/views/Root";
import { UserView } from "./components/views/user";
import { InteractionsView } from "./components/views/interactions";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
  },
  {
    path: "/user/:id",
    element: <UserView />,
  },
  {
    path: "interactions",
    element: <InteractionsView />,
  },
]);
