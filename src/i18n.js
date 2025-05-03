import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import zh from './locales/zh/translation.json';
import zhClassical from './locales/zh-classical/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        zh: { translation: zh },
        zhClassical: { translation: zhClassical },
        en: { translation: en }
    },
    supportedLngs: ['zh', 'zhClassical', 'en'],
    lng: 'zh',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;