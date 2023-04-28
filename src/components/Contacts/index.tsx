import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { LangContext } from "../../providers/LangContext";
import { useContext } from "react";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";

export const Contacts = () => {
  const ref = useRef(null);
  const { lang } = useContext(LangContext);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
          <motion.div style={{ scale }}>
            <ContactSectionText>
              <Text type="heading2" color="grey4">
                {lang === "English" ? "Let's talk and" : "Vamos conversar e"}{" "}
                <Text as="span" type="heading2" color="brand1">
                  {lang === "English"
                    ? "develop solutions for your company"
                    : "desenvolver soluções para sua empresa"}
                </Text>
                {lang === "English" ? ", together!" : ", juntos!"}
              </Text>
            </ContactSectionText>
          </motion.div>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {lang === "English" ? "My Whatsapp" : "Meu Whatsapp"}
                </Text>
                <Text color="grey2" type="body2">
                  {lang === "English"
                    ? "I'm available for a voice chat, let's talk about creativity together?"
                    : "Eu estou disponível para uma chamada de voz, vamos conversar sobre criatividade?"}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  {lang === "English" ? "Talk Now" : "Conversar agora"}
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {lang === "English" ? "My email" : "Meu email"}
                </Text>
                <Text color="grey2" type="body2">
                  {lang === "English"
                    ? "Send me an email reporting feedbacks, suggestions and ideas"
                    : "Me envie um email com feedbacks, sugestões e ideias"}
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:nekelpatrick.com")
                  }
                >
                  {lang === "English"
                    ? "Send me an email"
                    : "Me envie um email"}
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {lang === "English" ? "My LinkedIn" : "Meu LinkedIn"}
                </Text>
                <Text color="grey2" type="body2">
                  {lang === "English"
                    ? "We can create more constant interactions as well as a sharing network"
                    : "Nós podemos criar mais interações constantes bem como compartilhar contatos"}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={linkedInUrl}
                >
                  {lang === "English"
                    ? "Go to LinkedIn now"
                    : "Ir para o LinkedIn agora"}
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
