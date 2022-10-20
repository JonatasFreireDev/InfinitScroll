import "./styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AppProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
