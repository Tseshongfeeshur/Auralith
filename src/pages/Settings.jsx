import { useRef, useEffect, useState } from 'react';
import { useAppTitle } from '../TitleContext';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// 语言选择器
function LanguagePicker() {
  // 加载语言
  const { t } = useTranslation();
  const languageNames = {
    en: 'English',
    zh: '中文',
    zhClassical: '文言'
  };
  
  function handleChange(event) {
    const newLang = event.target.value;
    console.log(newLang);
    i18n.changeLanguage(newLang); // 直接热切换语言
  };
  console.log(i18n);
  return (
    <s-picker label={t('settings.language')}>

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