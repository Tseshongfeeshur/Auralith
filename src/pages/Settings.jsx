import { useRef, useEffect, useState } from 'react';
import { useAppTitle } from '../TitleContext';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// 语言选择器
function LanguagePicker() {
  // 加载语言
  const { t } = useTranslation();
  const languages = {
    en: 'English',
    zh: '中文',
    zhClassical: '文言'
  };
  
return (
  <s-picker label={t('settings.language')}>
    {
      Object.entries(languages).map(([lang, label]) => (
        <s-picker-item key={lang} value={lang} checked={lang == i18n.language} onClick={() => i18n.changeLanguage(lang)}>
          {label}
        </s-picker-item>
      ))
    }
  </s-picker>
  );
}

export default function Editor() {
  // 加载语言
  const { t } = useTranslation();
  
  // 设置标题
  const { setTitle } = useAppTitle();
  useEffect(() => {
    setTitle(t('pages.settings'));
  }, []);
  
  return (
    <LanguagePicker />
  );
}