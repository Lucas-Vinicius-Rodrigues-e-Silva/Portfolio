import { IChildren } from "../interfaces/Context/contexts.interface";
import { LangProvider } from "./LangContext";

export const Providers = ({ children }: IChildren) => {
  return <LangProvider>{children}</LangProvider>;
};
