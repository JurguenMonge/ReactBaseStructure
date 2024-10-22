//Libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//App router
import App from "./App.jsx";

/*
 * If you want to implement context you must add it in this file
 */

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* Here add the context provider */}
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
