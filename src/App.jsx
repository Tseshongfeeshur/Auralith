import { useRef, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppTitle } from './TitleContext.jsx';
import { NavLink } from "react-router"
import Library from './pages/Library';
import Editor from './pages/Editor';
import About from './pages/About';
import './App.css';

function DrawerMenu() {
  // 加载语言
  const { t } = useTranslation();
  return (
    <s-menu>
      <div slot="label">{t('navigation')}</div>
      <NavLink to="/">
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
      <NavLink to="/editor">
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
      <NavLink to="/about">
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
  )
}

export default function App() {
  // 路由
  const navigate = useNavigate();
  
  // 加载语言
  const { t } = useTranslation();
  
  // 获取元素
  const drawerRef = useRef();
  // 切换抽屉状态
  function switchDrawer() {
    drawerRef.current.toggle();
  }
  
  // 获取标题
  const { title } = useAppTitle();
  
  return (
    <s-page theme="auto">
      <s-drawer ref={drawerRef}>
        <div slot="start">
          <DrawerMenu />
        </div>
        <s-appbar>
          <s-icon-button onClick={switchDrawer}slot="navigation">
            <s-icon name="menu"></s-icon>
          </s-icon-button>
          <div slot="headline">{title}</div>
        </s-appbar>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </s-drawer>
    </s-page>
  );
}