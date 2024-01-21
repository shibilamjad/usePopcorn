import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Movies } from "./pages/Movies";
import { Genre } from "./pages/Genre";
import { Login } from "./pages/Login";
import { AppLayout } from "./components/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 40 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="movie" element={<Movies />} />
            <Route path="genre" element={<Genre />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
