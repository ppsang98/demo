import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Home from './pages/Home/Home';
import NewsList from './pages/NewsList/NewsList';
import DetailNews from './pages/DetailNews/DetailNews';
import { TranslateContextProvider, UserContext } from "./CommonContext";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();
  
  const [language, setLanguage] = useState(localStorage.getItem("i18nextLng"));
  
  const [username, setUsername] = useState(localStorage.getItem("username"))

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  
  const gotoLogin = (username) => {
    localStorage.setItem("username", username);
    setUsername(username);
  }
  
  const gotoLogout = () => {
    localStorage.removeItem("username");
    setUsername('');
  }
  
  const userContextValue = {
    username,
    gotoLogin,
    gotoLogout
  }

  return (
    <TranslateContextProvider value={t}>
      <UserContext.Provider value={userContextValue}>
        <Router>
          <React.Fragment>
            <Header changeLanguage={changeLanguage} />
            <Welcome />
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to={`/${language}`} />}
                />
                <Route path="/">
                  <Route path=":lang">
                    <Route path="" element={<Home />} />
                    <Route path="news" element={<NewsList />} />
                    <Route path="detail-news" element={<DetailNews />} />
                  </Route>
                </Route>
              </Routes>
            </div>
          </React.Fragment>
        </Router>
      </UserContext.Provider>
    </TranslateContextProvider>
  );
}

export default App;
