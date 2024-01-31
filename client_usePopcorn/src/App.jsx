import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import AppLayout from "./components/AppLayout";
import { SignUp } from "./pages/SignUp";
import { ProtectedRouter } from "./components/ProtectedRouter";
import { ProtectedRouterLogin } from "./components/ProtectedRouterLogin";
import { Error } from "./pages/Error";
import GlobalThemes from "./style/GlobalThemes";
import { DarkModeProvider } from "./context/DarkModeContext";
import { HomePage } from "./pages/HomePage";
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
    <>
      <QueryClientProvider client={queryCLient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <DarkModeProvider>
          <GlobalThemes />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route
                  path="/"
                  element={
                    // <ProtectedRouter>
                    <HomePage />
                    // </ProtectedRouter>
                  }
                />
                <Route
                  path="/sign-in"
                  element={
                    // <ProtectedRouterLogin>
                    <SignIn />
                    // </ProtectedRouterLogin>
                  }
                />
                <Route
                  path="/sign-up"
                  element={
                    // <ProtectedRouterLogin>
                    <SignUp />
                    // </ProtectedRouterLogin>
                  }
                />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
