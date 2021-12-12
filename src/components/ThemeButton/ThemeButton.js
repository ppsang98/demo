import { useRef, useState, useEffect } from "react";
import "./ThemeButton.css";

const ThemeButton = () => {
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [wrapperRef, open]);

  useEffect(() => {
    if (isDarkTheme) {
      document
        .getElementsByTagName("body")[0]
        .setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.getElementsByTagName("body")[0].setAttribute("data-theme", "");
      localStorage.setItem("theme", "");
    }
    setOpen(false);
  }, [isDarkTheme]);

  return (
    <div>
      <div
        className={`circle ${isDarkTheme ? "bg-green" : "bg-white"} `}
        onClick={() => setOpen(true)}
      ></div>

      {open && (
        <div className="dropdown-menu" ref={wrapperRef}>
          <div
            className="circle bg-white mb-1"
            onClick={() => setIsDarkTheme(false)}
          ></div>
          <div
            className="circle bg-green"
            onClick={() => setIsDarkTheme(true)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
