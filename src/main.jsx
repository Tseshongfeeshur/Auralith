import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TitleProvider } from './TitleContext';
import 'sober';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <TitleProvider>
                <App />
            </TitleProvider>
        </BrowserRouter>
    </React.StrictMode>
);