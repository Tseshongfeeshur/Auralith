import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TitleProvider } from './TitleContext';
import 'sober';
import './i18n';

function setLang() {
    const lang = localStorage.getItem('lang');
    if (!lang) {
        const browserLang = navigator.language.split('-')[0];
        localStorage.setItem('lang', browserLang || 'en');
    }
    i18n.changeLanguage(lang);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <TitleProvider>
                <App />
            </TitleProvider>
        </BrowserRouter>
    </React.StrictMode>
);