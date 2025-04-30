import { Routes, Route, useNavigate, useRef } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Library() {
  return (
    <div>
      
    </div>
  );
}

function Editor() {
  return null;
}

function About() {
  return null;
}

function App() {
  // 路由
  const navigate = useNavigate();
  
  // 加载语言
  const { t } = useTranslation();
  
  // 阻断后退行为
  window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    event.returnValue = ''; // 部分浏览器需要这个返回值
  });
  
  // 获取元素
  const menuRef = useRef();
  
  // 切换抽屉状态
  function switchDrawer() {
    menuRef.current.toggle();
  }
  
  return (
    <s-page theme="auto">
      <s-appbar>
        <s-icon-button onClick={switchDrawer}slot="navigation">
          <s-icon name="menu"></s-icon>
        </s-icon-button>
        <div slot="headline"></div>
      </s-appbar>
      <s-drawer>
        <div slot="start">
          <s-menu ref={menuRef}>
            <s-menu-item checked="true">
              <s-icon slot="start" name="home"></s-icon>
              {t('pages.library')}
            </s-menu-item>
            <s-menu-item>
              <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"></path>
                </svg>
              </s-icon>
              {t('pages.editor')}
            </s-menu-item>
            <s-menu-item>
              <s-icon slot="start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"></path>
                </svg>
              </s-icon>
              {t('pages.about')}
            </s-menu-item>
            <Routes>
              <Route path="/" element={<Library />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </s-menu>
        </div>
      </s-drawer>
    </s-page>
  );
}

export default App;