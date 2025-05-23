import { useRef, useEffect, useState } from 'react';
import { useAppTitle } from '../lib/TitleContext';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/index';
import styles from './styles/Settings.module.css'

// 语言选择器
function LanguagePicker() {
  // 加载语言
  const { t } = useTranslation();
  // 可用语言
  const languages = {
    en: 'English',
    zh: '中文',
  };
  
  // 改变语言
  function changeLang(lang) {
    // 持久化
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
  }
  
  return (
    <s-picker className={styles.picker} label={t('settings.language')}>
      {
        Object.entries(languages).map(([lang, label]) => (
          <s-picker-item key={lang} value={lang} selected={lang == i18n.language} onClick={() => changeLang(lang)}>
            {label}
          </s-picker-item>
        ))
      }
    </s-picker>
  );
}

// 模式切换器
function ModeSwitch() {
  // 加载语言
  const { t } = useTranslation();
  
  return (
    <s-ripple className={styles.switchBox}>
      <span>
        {t('settings.professional-mode')}
      </span>
      <s-switch checked={localStorage.getItem('pro-mode')} onClick={() => {
        localStorage.setItem('pro-mode', localStorage.getItem('pro-mode') != 'false')
      }}></s-switch>
    </s-ripple>
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
    <s-scroll-view className={styles.container}>
      <LanguagePicker />
      <s-divider className={styles.divider}></s-divider>
      <ModeSwitch />
    </s-scroll-view>
  );
}