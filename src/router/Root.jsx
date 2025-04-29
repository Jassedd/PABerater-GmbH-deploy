import React from "react";
import { Outlet } from "react-router-dom";
import NavbarHome from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { AuthProvider } from "../authContext/AuthContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Root() {
    const { i18n } = useTranslation();
    const { language, changeLanguage } = i18n;
    const { language: languagePath } = useParams();

    useEffect(() => {
        if (languagePath && languagePath !== language) {
            changeLanguage(languagePath);
        }
    }, [languagePath, language, changeLanguage]);

    return (
        <>
            <AuthProvider>
                <NavbarHome />
                <Outlet />
                <Footer />
            </AuthProvider>
        </>
    );
}

export default Root;
