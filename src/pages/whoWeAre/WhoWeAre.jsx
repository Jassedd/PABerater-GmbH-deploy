import "./WhoWeAre.css";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import WhoWeAreBanner from "../../components/who-we-are-banner/WhoWeAreBanner";
import HistoryBanner from "../../components/history-banner/HistoryBanner";
import NewLifeBanner from "../../components/new-life-banner/NewLifeBanner";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function WhoWeAre() {
    const { t } = useTranslation();
    const seoTitle = t("whoWeArePage.faqSubtitle");
    const seoDescription = t("whoWeArePage.seoDescription");

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
            </Helmet>
            <ScrollToTop />
            <WhoWeAreBanner />
            <HistoryBanner />
            <NewLifeBanner />
        </>
    );
}

export default WhoWeAre;
