import { createContext, useState } from "react";
import { ILangContext, IChildren } from "interfaces/Context/contexts.interface";

export const LangContext = createContext({} as ILangContext);

export const LangProvider = ({ children }: IChildren) => {
  const [lang, setLang] = useState("English");

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
