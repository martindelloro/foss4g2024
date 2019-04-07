import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

const languages = ['ar','arn','cn','en','es','fr','ge','it','jp','pt','quz','ru','sw'];
i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: languages[Math.floor(Math.random()*languages.length)],
    fallbackLng: "es",
    debug: false,
    interpolation: {
      escapeValue: false
    },

    ns: ['translation'],
    defaultNS: 'translation',
    react: {
      wait: true,
      useSuspense: true,
      withRef: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

export default i18n;
