import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppTitle } from './TitleContext.jsx';
import AppDrawer from './AppDrawer.jsx';
import Library from './pages/Library';
import Editor from './pages/Editor';
import About from './pages/About';
import './App.css';

export default function App() {
  const drawerRef = useRef();
  const { t } = useTranslation();
  const { title } = useAppTitle();
  
  function switchDrawer() {
    drawerRef.current.toggle();
  }
  
  return (
    <s-page theme="auto">
      <AppDrawer drawerRef={drawerRef} switchDrawer={switchDrawer}>
        <s-appbar slot="appbar">
          <s-icon-button onClick={switchDrawer} slot="navigation">
            <s-icon name="menu"></s-icon>
          </s-icon-button>
          <div slot="headline">{title}</div>
        </s-appbar>
      </AppDrawer>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </s-page>
  );
}