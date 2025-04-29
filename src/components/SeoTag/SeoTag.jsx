import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function SeoTag({ seoTitle, seoDescription }) {
    const { i18n } = useTranslation();
    const { language } = i18n;
    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <html lang={language} />
        </Helmet>
    );
}

export default SeoTag;
