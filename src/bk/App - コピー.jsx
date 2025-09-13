import './App.css';
export const App = () => {
 //ボタン
 const onClickButton = () => {
  alert();
 };
 
 return (
  <h1>こんにちは</h1>
  <button onClick={onClickButton}>ボタン</button>
 );
};
