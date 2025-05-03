import { useRef, useEffect, useState } from 'react';
import { useAppTitle } from '../TitleContext';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// 语言选择器
function LanguagePicker() {
    const handleChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);  // 直接热切换语言
    };

    return (
        <s-picker label={t('settings.language')} onChange={handleChange}>
            {i18n.options.supportedLngs
                .filter(lng => lng !== 'cimode')
                .map(lng => (
                    <s-picker-item key={lng} value={lng}>
                        {languageNames[lng] || lng}
                    </s-picker-item>
                ))}
        </s-picker>
    );
}

export default function Editor() {
  // 加载语言
  const { t } = useTranslation();
  const languages = i18n.options.supportedLngs.filter(l => l !== 'cimode');
  const languageNames = {
    en: 'English',
    zh: '中文',
    zhClassical: '文言'
};
  
  // 设置标题
  const { setTitle } = useAppTitle();
  useEffect(() => {
    setTitle(t('pages.settings'));
  }, []);
  
  return (
    <LanguagePicker />
  );
}
