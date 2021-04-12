import React from "react";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Email from "../icons/Email";
import { Container, Wrapper} from "./styled";

const socialLinks = [
  {
    icon: <Github />,
    to: "https://github.com/ludmila-niec",
  },
  {
    icon: <Linkedin />,
    to: "https://www.linkedin.com/in/ludmila-nieczyporuk/",
  },
  {
    icon: <Email />,
    to: "mailto:ludmila.nieczy@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        <Wrapper className='author'>Developed by Ludmila Nieczyporuk</Wrapper>
        <Wrapper>
          {socialLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
