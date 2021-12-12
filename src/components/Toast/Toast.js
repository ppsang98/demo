import { useEffect, useState } from "react";
import "./Toast.css";

const Toast = (props) => {
  const BOUNCE_IN_CLASS = "toast-bounce-in";

  const BOUNCE_OUT_CLASS = "toast-bounce-out";

  const DELAY = 2500;

  const [animate, setAnimate] = useState(BOUNCE_IN_CLASS);

  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const [remaining, setRemaining] = useState(DELAY);

  const [timeId, setTimeId] = useState(DELAY);

  const [start, setsStart] = useState(DELAY);

  const [isShow, setIsShow] = useState(true);

  const { classIcon, clearToast, index } = props;

  useEffect(() => {
    if (!isMouseEnter) {
      setsStart(Date.now());
      clearTimeout(timeId);
      const time = setTimeout(() => {
        closeToast();
      }, remaining);

      if (time) {
        setTimeId(time);
      }
    } else {
      clearTimeout(timeId);
      const remainTime = remaining - (Date.now() - start);
      setRemaining(remainTime);
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [isMouseEnter]);

  const closeToast = () => {
    setAnimate(BOUNCE_OUT_CLASS);
    setTimeout(() => {
      clearToast(index);
      setIsShow(false);
    }, 100);
  };

  return (
    isShow && (
      <div
        className={`toast_wrapper ${animate}`}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        onClick={() => closeToast()}
      >
        <div className="toast_body">
          <code>&lt;i class="{classIcon}"&gt;&lt;/i&gt; copied!</code>
        </div>
        <button className="close_button">
          <i className="ai-font-close-b"></i>
        </button>
        <div className="process_bar"></div>
      </div>
    )
  );
};

export default Toast;
