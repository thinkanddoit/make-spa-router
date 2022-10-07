import React, { useEffect } from "react";
import { RouterProvider, useRouterDispatch, useRouterState } from "./context";

interface RouterProps {
  children: React.ReactNode;
}
export const Router = ({ children }: RouterProps) => {
  const BASE_PATH = window.location.pathname;
  return (
    <RouterProvider basePath={BASE_PATH}>
      <PopstateHandler />
      {children}
    </RouterProvider>
  );
};

const PopstateHandler = () => {
  const dispath = useRouterDispatch();

  useEffect(() => {
    window.onpopstate = function (event) {
      if (history.state)
        dispath({ type: "CHANGE_PATH", path: history.state.path });
      else dispath({ type: "CHANGE_PATH", path: window.location.pathname });
    };
  }, []);

  return null;
};

interface RouteProps {
  path: string;
  component: React.ReactNode;
}
export const Route = ({ path, component }: RouteProps) => {
  const { path: currentPath } = useRouterState();
  if (path == currentPath) return <>{component}</>;

  return null;
};
