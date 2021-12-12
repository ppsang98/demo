import React, { useState, useEffect, useRef } from "react";
import "../../assets/css/agentimage.font.icons.css";
import "./Home.css";
import Search from "../../components/Search/Search";
import ListIcon from "../../components/ListIcon/ListIcon";
import config from "../../config/configData.json";
import ToastList from "../../components/ToastList/ToastList";

function Home() {
  const [listIcons, setListIcons] = useState(config.listIcons);

  const [keyword, setKeyword] = useState("");

  const [toastList, setToastList] = useState([]);

  const EMPTY_STRING = "";

  const currentToast = useRef([]);

  useEffect(() => {
    let filtered = [];
    if (keyword === EMPTY_STRING) {
      filtered = config.listIcons;
    } else {
      filtered = config.listIcons.filter((icon) => icon.includes(keyword));
    }
    setListIcons(filtered);
  }, [keyword]);

  const updateKeyword = (value) => {
    setKeyword(value);
  };

  const makeCopy = (classIcon) => {
    navigator.clipboard.writeText(`<i class="${classIcon}"></i>`);
    currentToast.current.push(true);
    setToastList([...toastList, classIcon]);
  };

  const clearToast = (index) => {
    currentToast.current[index] = false;
    if (!currentToast.current.includes(true)) {
      currentToast.current = [];
      setToastList([]);
    }
  };

  return (
    <React.Fragment>
      <main className="main">
        <h1 className="title">Aios Font Icons</h1>
        <div className="wrapper">
          <ToastList
            toastList={toastList}
            currentToast={currentToast}
            clearToast={clearToast}
          />
          <Search keyword={keyword} updateKeyword={updateKeyword} />
          <ListIcon listIcons={listIcons} handleClick={makeCopy} />
        </div>
      </main>
      <footer className="footer">
        <a
          href="https://resources.agentimage.com/fonts/agentimage.font.icons.css?ver=5.3.4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Source
          https://resources.agentimage.com/fonts/agentimage.font.icons.css?ver=5.3.4
        </a>
      </footer>
    </React.Fragment>
  );
}

export default Home;
