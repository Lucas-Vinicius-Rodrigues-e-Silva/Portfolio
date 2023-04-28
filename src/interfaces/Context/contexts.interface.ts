export interface ILangContext {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

export interface IChildren {
  children: React.ReactNode;
}
