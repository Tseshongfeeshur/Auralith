import { useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppTitle } from './TitleContext.jsx';
import { NavLink } from "react-router"
import Library from './pages/Library';
import Editor from './pages/Editor';
import Settings from './pages/Settings';
import About from './pages/About';
import './global.css';

function DrawerMenu({ drawerRef }) {
  // 加载语言
  const { t } = useTranslation();
  
  // 关闭抽屉
  function closeDrawer() {
    drawerRef.current.close();
  }
  
  return (
    <div>
    <s-menu>
      <div slot="label">{t('studio')}</div>
      <NavLink to="/" onClick={closeDrawer}>
        {({ isActive, isPending }) => (
          <s-menu-item checked={isActive ? "true" : "false"}>
            <s-icon slot="start">
              <svg viewBox="0 -960 960 960">
                <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"></path>
              </svg>
            </s-icon>
            {t('pages.library')}
          </s-menu-item>
        )}
      </NavLink>
      <NavLink to="/editor" onClick={closeDrawer}>
        {({ isActive, isPending }) => (
          <s-menu-item checked={isActive ? "true" : "false"}>
            <s-icon slot="start">
              <svg viewBox="0 -960 960 960">
                <path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"></path>
              </svg>
            </s-icon>
            {t('pages.editor')}
          </s-menu-item>
        )}
      </NavLink>
    </s-menu>
    <s-menu>
      <div slot="label">{t('options')}</div>
      <NavLink to="/settings" onClick={closeDrawer}>
        {({ isActive, isPending }) => (
          <s-menu-item checked={isActive ? "true" : "false"}>
            <s-icon slot="start">
              <svg viewBox="0 -960 960 960">
                <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"></path>
              </svg>
            </s-icon>
            {t('pages.settings')}
          </s-menu-item>
        )}
      </NavLink>
      <NavLink to="/about" onClick={closeDrawer}>
        {({ isActive, isPending }) => (
          <s-menu-item checked={isActive ? "true" : "false"}>
            <s-icon slot="start">
              <svg viewBox="0 -960 960 960">
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
              </svg>
            </s-icon>
            {t('pages.about')}
          </s-menu-item>
        )}
      </NavLink>
    </s-menu>
    </div>
  )
}

export default function App() {

  // 加载语言
  const { t } = useTranslation();
  
  // 获取元素
  const drawerRef = useRef();
  
  // 打开抽屉
  function showDrawer() {
    drawerRef.current.show();
  }
  
  // 获取标题
  const { title } = useAppTitle();
  
  return (
    <s-page theme="auto">
      <s-drawer ref={drawerRef}>
        <div slot="start">
          <DrawerMenu drawerRef={drawerRef} />
        </div>
        <s-appbar>
          <s-icon-button onClick={showDrawer}slot="navigation">
            <s-icon name="menu"></s-icon>
          </s-icon-button>
          <div slot="headline">{title}</div>
        </s-appbar>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </s-drawer>
    </s-page>
  );
}