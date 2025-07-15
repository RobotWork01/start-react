//外部ファイル参照
import React from 'react';
import ReactDOM from 'react-dom/client';

//動的オブジェクト参照
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//初期設定
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//web-vitals のインストール
//npm install web-vitals
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitalsはパフォーマンスの監視に関するサービスで、reportWebVitals(console.log);のように
//reportWebVitals()の部分を書き換えることでパフォーマンス監視を利用できるようになります。
reportWebVitals();
