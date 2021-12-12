import { useRef, useState, useEffect } from "react";
import './LanguageButton.css';

const LanguageButton = props => {
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  
  const language = localStorage.getItem("i18nextLng");
  
  const { changeLanguage } = props;

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
  
  const updateLanguage = (lang) => {
    changeLanguage(lang);
    setOpen(false);
  }

  return (
    <div className="language">
      <div
        className={`circle flag ${language}`}
        onClick={() => setOpen(true)}
      ></div>

      {open && (
        <div className="dropdown-menu" ref={wrapperRef}>
          <div
            className="circle flag en"
            onClick={() => updateLanguage('en')}
          ></div>
          <div
            className="circle flag vi"
            onClick={() => updateLanguage('vi')}
          ></div>
          <div
            className="circle flag th"
            onClick={() => updateLanguage('th')}
          ></div>
          <div
            className="circle flag cn"
            onClick={() => updateLanguage('cn')}
          ></div>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
