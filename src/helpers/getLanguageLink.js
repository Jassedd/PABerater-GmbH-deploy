function getLanguageLink(route, i18n) {
    const { language } = i18n;
    return `/${language}${route}`;
}

export default getLanguageLink;
