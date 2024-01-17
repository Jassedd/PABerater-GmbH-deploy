import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Homologate from "../pages/homologate/homologate";
import Recognition from "../pages/recognition/recognition";
import Root from "./Root";
import Landing from "../pages/landing/Landing";
import WhoWeAre from "../pages/whoWeAre/WhoWeAre";
import Contact from "../pages/contact/Contact";
import Translate from "../pages/officialTranslate/officialTranslate";
import AdminHome from "../admin/adminHome/AdminHome";
import { ProtectedRoute } from "../components/protectedRoute/ProtectedRoutes";
import Login from "../components/login/Login";
import BlogAdmPaberater from "../admin/blogPaberater/BlogAdmPaberater";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import NewsList from "../admin/adminNews/AdminNews";
import addOrEditNews from "../admin/AddOrEditNews";
import AdminNewsDetails from "../admin/admNewsDetails/AdmNewsDetails";
import AdminNewsEdit from "../admin/adminNewsEdit/AdminNewsEdit";


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
          path:"/reconocimiento",
          element: <Recognition />
        },
        {
          path:"/traduccionesjuradas",
          element: <Translate />
        },

        {
          path:"/landing",
          element: <Landing />
        },
        {
          path:"/somos",
          element: <WhoWeAre />
        },
        {
          path:"/contacto",
          element: <Contact />
        },
        {
          path:"/blogPABerater",
          element: <Blog />
        },
        {
          path:"/blogPABerater/:id",
          element: <BlogDetails />
        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path: "/admin",
          element:(
              <AdminHome />
          ),
        },
        {
          path: "/blogadm",
          element:(
              <BlogAdmPaberater />
          ),
        },
        {
          path: "/admnews",
          element:(
              <NewsList />
          ),
        },
        {
          path: "/admnewsdetails/:id",
          element:(
              <AdminNewsDetails />
          ),
        },
        {
          path: "/admedit/:id",
          element:(
              <AdminNewsEdit />
          ),
        },

      ],
    },
  ]);

  export default router