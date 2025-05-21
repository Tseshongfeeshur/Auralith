import { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TitleContext = createContext();

export function TitleProvider({ children }) {
  // 加载语言
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    document.title = `${title} | ${t('Auralith')}`;
  }, [title, t]);
  
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useAppTitle() {
  return useContext(TitleContext);
}