import "./styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProvider } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
