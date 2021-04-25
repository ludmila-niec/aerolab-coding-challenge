import React from "react";
import { Container, Wrapper } from "./styled";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";

const socialLinks = [
  {
    icon: <GitHub titleAccess='GitHub icon' />,
    name: "GitHub",
    ariaLabel: "Go to Ludmila's github",
    to: "https://github.com/ludmila-niec",
  },
  {
    icon: <LinkedIn  titleAccess='LinkedIn icon'/>,
    name: "LinkedIn",
    ariaLabel: "Go to Ludmila's LinkedIn",
    to: "https://www.linkedin.com/in/ludmila-nieczyporuk/",
  },
  {
    icon: <Email titleAccess='Email icon' />,
    name: "email",
    ariaLabel: "Send email to Ludmila",
    to: "mailto:ludmila.nieczy@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        <Wrapper className="author">Developed by Ludmila Nieczyporuk</Wrapper>
        <Wrapper>
          {socialLinks.map((link) => {
            const { name, ariaLabel, to, icon } = link;
            return (
              <a
                className="links"
                key={name}
                href={to}
                aria-label={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            );
          })}
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
