import { createBrowserRouter } from "react-router-dom";
import { RootView } from "./components/views/Root";
import { UserView } from "./components/views/user";
import { InteractionsView } from "./components/views/interactions";
import { ServiceView } from "./components/views/service";

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
    path: "/service/:id",
    element: <ServiceView />,
  },
  {
    path: "interactions",
    element: <InteractionsView />,
  },
]);
