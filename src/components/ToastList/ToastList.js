import React from "react";
import Toast from "../Toast/Toast";

const ToastList = (props) => {
  const { clearToast, toastList, currentToast } = props;

  return (
    <div className="toast">
      {toastList.length > 0 &&
        toastList.map((toast, i) => (
          currentToast.current[i] && <Toast
            classIcon={toast}
            key={i}
            index={i}
            clearToast={clearToast}
            isShow = {currentToast.current[i]}
          />
        ))}
    </div>
  );
};

export default ToastList;
