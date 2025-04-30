import { useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Library() {
  // 加载语言
  const { t } = useTranslation();
  
  // 获取元素
  const addDialogRef = useRef();
  const addGameTitleRef = useRef();
  const addGameIdRef = useRef();
  // 打开游戏创建对话框
  function showAddDialog() {
    // 生成随机 id（年月日-时分秒-两位随机数）
    function getId() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hour = String(now.getHours()).padStart(2, '0');
      const minute = String(now.getMinutes()).padStart(2, '0');
      const second = String(now.getSeconds()).padStart(2, '0');
      const random = String(Math.floor(Math.random() * 100)).padStart(2, '0');
      return `${year}${month}${day}-${hour}${minute}${second}-${random}`;
    }
    // 随机 id 填充至输入框
    addGameIdRef.current.value = getId();
    addGameTitleRef.current.error = false;
    addGameIdRef.current.error = false;
    addGameTitleRef.current.value = '';
    addDialogRef.current.showed = true;
  }
  // 创建游戏
  function addSubmit() {
    const newGameTitle = addGameTitleRef.current.value;
    const newGameId = addGameIdRef.current.value;
    if (newGameTitle && newGameId) {
      sober.Snackbar.builder({
        text: t('library.add-dialog.snackbar.game-added-successful', {
          title: newGameTitle,
          id: newGameId
        }),
        type: 'success',
        action: t('library.add-dialog.snackbar.ok')
      });
    } else if (!newGameTitle) {
      addGameTitleRef.current.error = true;
      sober.Snackbar.builder({
        text: t('library.add-dialog.snackbar.fix-empty-title'),
        type: 'error',
        action: t('library.add-dialog.snackbar.ok')
      });
    } else {
      addGameTitleRef.current.error = true;
      sober.Snackbar.builder({
        text: t('library.add-dialog.snackbar.fix-empty-id'),
        type: 'error',
        action: t('library.add-dialog.snackbar.ok')
      });
    }
  }
  
  return (
    <div>
      <s-fab onClick={showAddDialog}>
        <s-icon name="add" slot="start"></s-icon>
        {t('library.add-game')}
      </s-fab>
      <s-dialog ref={addDialogRef}>
        <div slot="headline">{t('library.add-game')}</div>
        <div slot="text">
          <s-text-field ref={addGameTitleRef} className="text-input" label={t('library.add-dialog.game-title')}>
            <s-icon slot="start">
              <svg viewBox="0 -960 960 960">
                <path d="M440-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120-760v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm480 0v-80h80v-560h-80v-80h240v80h-80v560h80v80H600Z"></path>
              </svg>
            </s-icon>
          </s-text-field>
          <s-text-field ref={addGameIdRef} className="text-input" label={t('library.add-dialog.game-id')}>
            <s-icon slot="start">
              <svg viewBox="0 -960 960 960">
                <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"></path>
              </svg>
            </s-icon>
          </s-text-field>
        </div>
        <s-button slot="action" type="text">{t('library.add-dialog.cancel')}</s-button>
        <s-button onClick={addSubmit} slot="action" type="filled-tonal">{t('library.add-dialog.add-it')}</s-button>
      </s-dialog>
    </div>
  );
}

function Editor() {
  // 加载语言
  const { t } = useTranslation();
  
  return null;
}

function About() {
  // 加载语言
  const { t } = useTranslation();
  
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
  const drawerRef = useRef();
  // 切换抽屉状态
  function switchDrawer() {
    drawerRef.current.toggle();
  }
  
  return (
    <s-page theme="auto">
      <s-appbar>
        <s-icon-button onClick={switchDrawer}slot="navigation">
          <s-icon name="menu"></s-icon>
        </s-icon-button>
        <div slot="headline"></div>
      </s-appbar>
      <s-drawer ref={drawerRef}>
        <div slot="start">
          <s-menu>
            <s-menu-item onClick={() => navigate('/library')} checked="true">
              <s-icon slot="start">
                <svg viewBox="0 -960 960 960">
                  <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"></path>
                </svg>
              </s-icon>
              {t('pages.library')}
            </s-menu-item>
            <s-menu-item onClick={() => navigate('/editor')}>
              <s-icon slot="start">
                <svg viewBox="0 -960 960 960">
                  <path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"></path>
                </svg>
              </s-icon>
              {t('pages.editor')}
            </s-menu-item>
            <s-menu-item onClick={() => navigate('/about')}>
              <s-icon slot="start">
                <svg viewBox="0 -960 960 960">
                  <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
                </svg>
              </s-icon>
              {t('pages.about')}
            </s-menu-item>
          </s-menu>
        </div>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </s-drawer>
    </s-page>
  );
}

export default App;