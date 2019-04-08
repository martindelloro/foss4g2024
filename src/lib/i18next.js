import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar : {
        translation: {
          support: "أنا أؤيد"
        }
      },
      arn : {
        translation: {
          support: 'FËTALUWN'
        }
      },
      cn : {
        translation: {
          support: '我支持'
        }
      },
      de : {
        translation: {
          support: 'ICH UNTERSTÜTZE'
        }
      },
      en : {
        translation: {
          support: 'I SUPPORT'
        }
      },
      es : {
        translation: {
          support: 'YO APOYO'
        }
      },
      fr : {
        translation: {
          support: 'JE SOUTIENS'
        }
      },
      gn : {
        translation: {
          support: 'CHE AIPYTYVO'
        }
      },
      it : {
        translation: {
          support: 'APPOGGIO'
        }
      },
      pt : {
        translation: {
          support: 'EU APOIO'
        }
      },
      jp : {
        translation: {
          support: '応援します'
        }
      },
      quz : {
        translation: {
          support: 'YANAPAY'
        }
      },
      ru : {
        translation: {
          support: 'Я поддерживаю'
        }
      },
      sw : {
        translation: {
          support: 'NINASAIDIA'
        }
      },
    },
    lng: 'es',
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
