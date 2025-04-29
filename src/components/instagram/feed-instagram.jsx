import React from "react";
import "./feed-instagram.css";
import { useTranslation } from "react-i18next";

function FeedInstagram() {
    const { t } = useTranslation();
    const title = t("sections.instagramFeed.title");
    return (
        <section className="instagramFeed_section">
            <h1 className="instagramFeed_section_Title">{title}</h1>

            <iframe
                className="instaFeed"
                src="https://www.instagram.com/paberater_/embed"
                width="90%"
                height="420"
                frameborder="0"
                scrolling="no"
                allowtransparency="true"
            ></iframe>
        </section>
    );
}

export default FeedInstagram;
