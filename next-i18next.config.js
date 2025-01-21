/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th", "zh", "jp"],
    localePath: "./public/locales",
    localeDetection: false,

    // fallbackLng: "th",
  },
};
