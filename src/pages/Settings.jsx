import { useRef, useEffect } from 'react';
import { useAppTitle } from '../TitleContext';
import { useTranslation } from 'react-i18next';

export default function Editor() {
  // 加载语言
  const { t } = useTranslation();
  
  // 设置标题
  const { setTitle } = useAppTitle();
  useEffect(() => {
    setTitle(t('pages.settings'));
  }, []);

}