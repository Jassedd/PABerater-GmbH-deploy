import "./page-banner.css";

function PageBanner({ title, image, subtitle }) {
    return (
        <div className="page-banner">
            <div
                className="page-banner-mobile-image-container"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="page-banner-mobile-image-container-text">
                    <h1 className="page-banner-mobile-image-container-title">
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className="page-banner-mobile-image-container-subtitle">
                            {subtitle}
                        </h2>
                    )}
                </div>
            </div>
            <div className="">
                <h1 className="page-banner-title">{title}</h1>
                {subtitle && (
                    <h2 className="page-banner-subtitle">{subtitle}</h2>
                )}
            </div>
            <img src={image} className="page-banner-image" />
        </div>
    );
}

export default PageBanner;
