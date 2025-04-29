import { createBrowserRouter, Navigate } from "react-router-dom";
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
import UsersForms from "../admin/usersForms/UsersForms";
import UsersDescription from "../admin/usersForms/UsersDescription";
import TermsConditions from "../pages/terms&conditions/Terms&Conditios";
import CookieConsent from "../components/cookieConsent/CookieConsent";
import CookiePolicy from "../pages/cookiesPolicy/cookiesPolicy";
import Register from "../components/register/Register";
import Datenschutz from "../pages/datenschutz/Datenschutz";
import Impressum from "../pages/impressum/impressum";
import Agb from "../pages/agb/agb";
import EngineeringRecognition from "../pages/engineeringRecognition/EngineeringRecognition";
import SuccesStories from "../pages/successStories/SuccesStories";
import ThanksPage from "../pages/ThanksPage/ThanksPage";
import DownloadPdf from "../components/DownloadPdf/DownloadPdf";
import {
    aboutRoute,
    agbRoute,
    contactRoute,
    cookiePolicyRoute,
    datenschutzRoute,
    engineersRecognitionRoute,
    homologationsRoute,
    impressumRoute,
    landingRoute,
    loginRoute,
    recognitionRoute,
    signupRoute,
    successStoriesRoute,
    swornTranslationsRoute,
    termsAndConditionsRoute,
    thankYouRoute,
} from "../constants/routeNames";
import HomeJumbotron from "../components/HomeJumbotron/HomeJumbotron";

function Test1() {
    return (
        <div>
            <HomeJumbotron image="/home1.jpg" />
            <HomeJumbotron image="/home2.jpg" />
            <HomeJumbotron image="/home3.jpg" />
            <HomeJumbotron image="/home4.jpg" />
            <HomeJumbotron image="/home5.jpg" />
            <HomeJumbotron image="/home6.jpg" />
            <HomeJumbotron image="/home7.jpg" />
            <HomeJumbotron image="/home8.jpg" />
            <HomeJumbotron image="/home9.jpg" />
        </div>
    );
}
const publicRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/test",
        element: <Test1 />,
    },
    {
        path: homologationsRoute,
        element: <Homologate />,
    },

    {
        path: recognitionRoute,
        element: <Recognition />,
    },
    {
        path: engineersRecognitionRoute,
        element: <EngineeringRecognition />,
    },
    {
        path: swornTranslationsRoute,
        element: <Translate />,
    },
    {
        path: successStoriesRoute,
        element: <SuccesStories />,
    },
    {
        path: landingRoute,
        element: <Landing />,
    },
    {
        path: aboutRoute,
        element: <WhoWeAre />,
    },
    {
        path: contactRoute,
        element: <Contact />,
    },
    {
        path: "/blogPABerater",
        element: <Blog />,
    },
    {
        path: thankYouRoute,
        element: <ThanksPage />,
    },
    {
        path: "/blogPABerater/:id",
        element: <BlogDetails />,
    },
    {
        path: termsAndConditionsRoute,
        element: <TermsConditions />,
    },
    {
        path: cookiePolicyRoute,
        element: <CookiePolicy />,
    },
    {
        path: datenschutzRoute,
        element: <Datenschutz />,
    },
    {
        path: impressumRoute,
        element: <Impressum />,
    },
    {
        path: agbRoute,
        element: <Agb />,
    },
    {
        path: loginRoute,
        element: <Login />,
    },
    {
        path: signupRoute,
        element: <Register />,
    },
];
const localizedRoutes = publicRoutes.map((v) => ({
    ...v,
    path: `/:language/${v.path}`,
}));

const routesInSpanish = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/homologaciones",
        element: <Navigate to={`/es${homologationsRoute}`} />,
    },

    {
        path: "/reconocimiento",
        element: <Navigate to={`/es${recognitionRoute}`} />,
    },
    {
        path: "/reconocimiento-ingenieros",
        element: <Navigate to={`/es${engineersRecognitionRoute}`} />,
    },
    {
        path: "/traduccionesjuradas",
        element: <Navigate to={`/es${swornTranslationsRoute}`} />,
    },
    {
        path: "/casos-exito",
        element: <Navigate to={`/es${successStoriesRoute}`} />,
    },
    {
        path: "/landing",
        element: <Navigate to={`/es${landingRoute}`} />,
    },
    {
        path: "/somos",
        element: <Navigate to={`/es${aboutRoute}`} />,
    },
    {
        path: "/contacto",
        element: <Navigate to={`/es${contactRoute}`} />,
    },
    {
        path: "/blogPABerater",
        element: <Blog />,
    },
    {
        path: "/gracias",
        element: <Navigate to={`/es${thankYouRoute}`} />,
    },
    {
        path: "/blogPABerater/:id",
        element: <BlogDetails />,
    },
    {
        path: "/terminos-y-condiciones",
        element: <Navigate to={`/es${termsAndConditionsRoute}`} />,
    },
    {
        path: "/politica-de-cookies",
        element: <Navigate to={`/es${cookiePolicyRoute}`} />,
    },
    {
        path: "/datenschutz",
        element: <Navigate to={`/es${datenschutzRoute}`} />,
    },
    {
        path: "/impressum",
        element: <Navigate to={`/es${impressumRoute}`} />,
    },
    {
        path: "/agb",
        element: <Navigate to={`/es${agbRoute}`} />,
    },
    {
        path: "/hipaberater",
        element: <Navigate to={`/es${loginRoute}`} />,
    },
    {
        path: "/newpaberater",
        element: <Navigate to={`/es${signupRoute}`} />,
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            ...publicRoutes,
            ...routesInSpanish,
            {
                path: "/home",
                element: (
                    <ProtectedRoute>
                        <AdminHome />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/blogadm",
                element: (
                    <ProtectedRoute>
                        <BlogAdmPaberater />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/admnews",
                element: (
                    <ProtectedRoute>
                        <NewsList />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/admnewsdetails/:id",
                element: (
                    <ProtectedRoute>
                        <AdminNewsDetails />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/admedit/:id",
                element: (
                    <ProtectedRoute>
                        <AdminNewsEdit />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/users",
                element: (
                    <ProtectedRoute>
                        <UsersForms />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/descripcion/:id",
                element: (
                    <ProtectedRoute>
                        <UsersDescription />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: "/:language",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: localizedRoutes,
    },
]);

export default router;
