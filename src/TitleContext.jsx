import { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TitleContext = createContext();

export function TitleProvider({ children }) {
  // 加载语言
  const { t } = useTranslation();
  
  const [title, setTitle] = useState('');
  //document.title = `${title} | ${t(Auralith)}`;
  
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export function useAppTitle() {
  return useContext(TitleContext);
}