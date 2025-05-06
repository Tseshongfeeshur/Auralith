import { useRef, useEffect } from 'react';
import { useAppTitle } from '../lib/TitleContext';
import { useTranslation } from 'react-i18next';
import { Snackbar } from 'sober';
import { getAllGameIds, getGame, addGame } from '../lib/db.js'
import styles from './styles/Library.module.css';

function Card({ title, id, desc }) {
  return (
    <s-card type="outlined" clickable="true">
      <div className={styles.cardTitle} slot="headline">
        <s-icon>
          <svg viewBox="0 -960 960 960">
            <path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"></path>
          </svg>
        </s-icon>
        <div>
          {title}
        </div>
      </div>
      <div slot="text">
        {desc}
      </div>
    </s-card>
  );
}

export default function Library() {
  // 加载语言
  const { t } = useTranslation();
  
  // 设置标题
  const { setTitle } = useAppTitle();
  useEffect(() => {
    setTitle(t('pages.library'));
  }, []);
  
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
    addGameTitleRef.current.value = '';
    addDialogRef.current.showed = true;
  }
  // 创建游戏
  async function addSubmit() {
    const newGameTitle = addGameTitleRef.current.value;
    const newGameId = addGameIdRef.current.value;
    if (newGameTitle && newGameId) {
      const newGameObj = {
        "id": newGameId,
        "desc": t('library.1st-game-desc'),
        "page": {
          "title": newGameTitle,
          "html": {
            "header": newGameTitle,
            "footer": t('Auralith')
          },
          "style": "",
          "script": ""
        },
        "plots": [
        {
          "coordinates": {
            "x": 0,
            "y": 0
          },
          "content": {
            "desc": t('library.1st-plot-desc'),
            "text": "",
            "image": {
              "src": "",
              "alt": ""
            },
            "actions": [
            {
              "plotIndex": 0,
              "text": ""
            }]
          },
          "hooks": {
            "html": {
              "forText": {
                "before": "",
                "after": ""
              },
              "forImage": {
                "before": "",
                "after": ""
              },
              "forActions": {
                "before": "",
                "after": ""
              }
            },
            "style": "",
            "script": {
              "afterEnter": "",
              "beforeLeave": ""
            }
          }
        }]
      }
      try {
        await addGame(newGameObj);
        Snackbar.builder({
          text: t('library.add-dialog.snackbar.game-added-successful', {
            title: newGameTitle,
            id: newGameId
          }),
          type: 'success',
          action: t('library.add-dialog.snackbar.ok')
        });
      } catch (error) {
        Snackbar.builder({
          text: `${t('library.add-dialog.snackbar.game-added-failed')}${error.message}`,
          type: 'error',
          action: t('library.add-dialog.snackbar.ok')
        });
      }
    } else if (!newGameTitle) {
      Snackbar.builder({
        text: t('library.add-dialog.snackbar.fix-empty-title'),
        type: 'error',
        action: t('library.add-dialog.snackbar.ok')
      });
    } else {
      Snackbar.builder({
        text: t('library.add-dialog.snackbar.fix-empty-id'),
        type: 'error',
        action: t('library.add-dialog.snackbar.ok')
      });
    }
  }
  
  return (
    <div className={styles.container}>
      <s-search className={styles.search} placeholder={t('library.search-for-your-games')}>
        <s-icon name="search" slot="start"></s-icon>
        <s-icon-button slot="end">
          <s-icon>
            <svg viewBox="0 -960 960 960">
              <path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"></path>
            </svg>
          </s-icon>
        </s-icon-button>
      </s-search>
      <Card title="测试" id="20250506-115406-54" desc="第一个故事。关于巫婆和恶狼。" />
      <Card title="测试超级超级超级超级超级长的标题" id="loooooooooongid20250506-115406-54" desc="第一个故事。关于超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级长的描述文本。" />
      <Card title="测" id="srt" desc="短。" />
      <s-fab className={styles.fab} onClick={showAddDialog}>
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