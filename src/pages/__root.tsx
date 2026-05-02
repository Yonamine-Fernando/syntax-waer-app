import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [{ title: "Inicio - SyntaxWear" }],
  }),
});

function RootComponent() {
  return (
    <React.Fragment>
      <HeadContent />
      <Outlet />
    </React.Fragment>
  );
}
