import { RouterProvider, createRouter } from "@tanstack/react-router";
import { BagProvider } from "./contexts/BagPrivider";
import { routeTree } from "./router-tree-gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <BagProvider>
      <RouterProvider router={router} />;
    </BagProvider>
  );
}

export default App;
