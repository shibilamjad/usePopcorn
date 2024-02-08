import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { SignUp } from "./pages/SignUp";
import { Error } from "./pages/Error";
import GlobalThemes from "./style/GlobalThemes";
import { DarkModeProvider } from "./context/DarkModeContext";
import { HomePage } from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { Login } from "./pages/Login";
import {
  ProtectedRoutesHomePage,
  ProtectedRoutesWatchLater,
} from "./components/ProtectedRoutes ";
import ProtectedRouterAfterLogIn from "./components/ProtectedRouterAfterLogIn ";
import { WatchLater } from "./components/WatchLater/WatchLater";
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
                    <ProtectedRoutesHomePage>
                      <HomePage />
                    </ProtectedRoutesHomePage>
                  }
                />
                <Route
                  path="/watchLater"
                  element={
                    <ProtectedRoutesWatchLater>
                      <WatchLater />
                    </ProtectedRoutesWatchLater>
                  }
                />
                <Route
                  path="/sign-in"
                  element={
                    <ProtectedRouterAfterLogIn>
                      <Login />
                    </ProtectedRouterAfterLogIn>
                  }
                />
                <Route
                  path="/sign-up"
                  element={
                    <ProtectedRouterAfterLogIn>
                      <SignUp />
                    </ProtectedRouterAfterLogIn>
                  }
                />

                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#fff",
                color: "#272727",
              },
            }}
          />
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
