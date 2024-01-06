import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Homologate from "../pages/homologate/homologate";
import Root from "./Root";
import Landing from "../pages/landing/Landing";
import WhoWeAre from "../pages/whoWeAre/WhoWeAre";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
            path:"/",
            element: <Home />
        },
        {
          path:"/homologaciones",
          element: <Homologate />
        },
        {
          path:"/landing",
          element: <Landing />
        },
        {
          path:"/somos",
          element: <WhoWeAre />
        },

      ],
    },
  ]);

  export default router