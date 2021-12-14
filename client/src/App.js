import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Statistics from './pages/Statistics';
import CountriesData from './pages/CountriesData';
import NavBar from './components/NavBar/NavBar';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = JSON.parse(localStorage.getItem('lang'));
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/countries">
          <CountriesData />
        </Route>
        <Route path="/stats">
          <Statistics />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  );
}

export default App;
