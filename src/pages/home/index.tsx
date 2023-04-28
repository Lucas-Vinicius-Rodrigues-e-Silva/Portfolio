// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

import { useContext } from "react";
import { LangContext } from "../../providers/LangContext";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/Portfolio`;

  const { lang } = useContext(LangContext);

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">
                {" "}
                {lang === "English"
                  ? "Hello, my name is"
                  : "Olá meu nome é"}{" "}
                {userData.nameUser}
              </Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              {lang === "English" ? "I" : "Eu"}{" "}
              <Text as="span" type="heading1" color="brand1">
                {lang === "English" ? "love" : "amo"}
              </Text>{" "}
              {lang === "English" ? "creating and" : "criar e"}{" "}
              <Text as="span" type="heading1" color="brand1">
                {lang === "English" ? "developing" : "desenvolver"}
              </Text>{" "}
              {lang === "English" ? "projects" : "projetos"}
            </Text>
            <Text type="body1" color="grey2">
              {lang === "English"
                ? "Discover here in this environment, created especially for you, all my projects and technologies"
                : "Descubra aqui nesse ambiente, criado especialmente para você, todos os meus projetos e tecnologias"}
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                {lang === "English" ? "See Projects" : "Ver projetos"}
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                {lang === "English"
                  ? "See my portfolio source code"
                  : "Ver codígo fonte do meu portfólio"}
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                {lang === "English" ? "My projects" : "Meus projetos"}
              </Text>
              <Text as="p" type="body1" color="grey2">
                {lang === "English" ? "Some of my" : "Alguns dos meus"}{" "}
                <Text as="span" color="brand5">
                  {lang === "English" ? "side projects" : "outros projetos"}
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
