import { useContext, useState } from "react";
import { LangContext } from "../../providers/LangContext";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const { lang, setLang } = useContext(LangContext);

  const ChangeLang = () => {
    if (lang === "English") {
      setLang("Português");
    } else {
      setLang("English");
    }
    console.log(lang);
  };
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        {lang === "English" ? "Home" : "Início"}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        {lang === "English" ? "Projects" : "Projetos"}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        {lang === "English" ? "Contact" : "Contato"}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        {lang === "English" ? "Social Media" : "Redes Sociais"}
      </Button>
      <Button
        type="icon"
        color="grey4"
        aria-label="Change lang"
        onClick={ChangeLang}
      >
        <MdLanguage />
      </Button>
    </NavbarLinks>
  );
};
