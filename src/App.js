import styles from './App.module.css';
import Login from './components/login/login';

function App({authService}) {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  return (
    <div className={styles.app}>
      <Login authService={authService}/>
    </div>
  );
}

export default App;
