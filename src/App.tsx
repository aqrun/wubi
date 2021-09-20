import {
  KeyBoard,
  Descriptions,
} from './components';

import s from  './App.module.scss';

function App() {
  return (
    <div className={s.container}>
      <KeyBoard />
      <Descriptions />
    </div>
  );
}

export default App;
