import React, { useContext } from "react";
import { TranslateContext, UserContext } from "../../CommonContext";
const Welcome = () => {
  const t = useContext(TranslateContext);
  const userContext = useContext(UserContext);

  return (
    <div>
      <h1>
        {t("welcome")}
        {userContext.username !== "" && ", " + userContext.username}
      </h1>
    </div>
  );
};

export default Welcome;
