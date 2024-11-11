import { createBrowserRouter } from "react-router-dom";
import { RootView } from "./components/views/root.view";
import { UserView } from "./components/views/user.view";
import { InteractionsView } from "./components/views/interactions.view";
import { ServiceView } from "./components/views/service.view";

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
