import './App.css';

export const App = () => {
  //ボタン押下イベント時の処理
  const onClickButton = () => {
    alert(`押しました！`);
  };
  
  //HTMLタグ
  return (
    <div className="App">
      <header className="App-header">
        <h1>私の最初のReactアプリ</h1>
        <p>Reactの勉強を始めました！</p>
        <button onClick={onClickButton}>クリックしてみて</button>
      </header>
    </div>
  );
}

//reportWebVitalsによるパフォーマンスの監視に関するサービスでは
//各関数のエクスポートが必要
export default App;