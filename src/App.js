import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App({FileInput, authService, memberRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />
          </Route>
          <Route path='/maker'>
            <Maker authService={authService} FileInput={FileInput} memberRepository={memberRepository}/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
