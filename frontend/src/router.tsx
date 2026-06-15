import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found-404";
import { HistoricoList } from "./pages/historico-list";
import { Login } from "./pages/login";
import { ForgotPassword } from "./pages/forgot-password";
import { Result } from "./pages/result";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/historico",
        element: <HistoricoList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
