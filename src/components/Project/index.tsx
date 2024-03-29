import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState, useContext } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { RepoImgs } from "@/utils/reposData";
import { LangContext } from "../../providers/LangContext";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  console.log(repositories);

  const { lang } = useContext(LangContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories?.map?.((repository) => (
          <ProjectWrapper key={repository.id}>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              {repository.name}
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                {lang === "English"
                  ? "Primary Language:"
                  : "Linguagem principal"}
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    {lang === "English"
                      ? "Primary language not identified"
                      : "Linguagem principal não identificada"}
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>
            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            {RepoImgs?.map(
              (img) =>
                img.id === repository.id && (
                  <img
                    src={img.img}
                    style={{
                      width: "35vw",
                      height: "45vh",
                      borderRadius: "2%",
                    }}
                    key={img.id}
                  ></img>
                )
            )}
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub />{" "}
                {lang === "English" ? "Github Code" : "Codígo do Github"}
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink target="_blank" href={`${repository.homepage}`}>
                  <FaShare /> {lang === "English" ? "See demo" : "Ver demo"}
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
