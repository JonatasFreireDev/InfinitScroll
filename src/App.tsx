import "./styles/global.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import { Routes } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
