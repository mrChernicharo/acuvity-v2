import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./hooks/useTheme.tsx";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </StrictMode>
);
