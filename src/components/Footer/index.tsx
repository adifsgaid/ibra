import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
  Para,
  Large,
  Chat,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contataci")}</Language>
              <Large to="/">{t("Hai una domanda ? Scrivici !")}</Large>
              <Para>
                {t(
                  `Chiedi un preventivo gratuito e senza impegno per la tua casa o la tua azienda.`
                )}
              </Para>
              <a href="mailto:iborkimpianti@gmail.com">
                <Chat>{t(`Parlaci Adesso !`)}</Chat>
              </a>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "2rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="200px"
                  height="250px"
                />
              </LogoContainer>
            </NavLink>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SocialLink href="https://wa.me/3400784160" src="whatsapp.svg" />
              <span style={{ marginLeft: "5px" }}>
                Inviaci un messagio su Whatsapp
              </span>
            </div>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
