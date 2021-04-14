import React from "react";
import Layout from "../Layout";
import {
  Container,
  Wrapper,
  LinkStyled,
  Subtitle,
  CategoryName,
} from "./styled";
import {
  LaptopMacRounded,
  PhoneAndroidRounded,
  CameraAltRounded,
  HeadsetMicRounded,
  SportsEsportsRounded,
} from "@material-ui/icons";

const CATEGORIES = [
  {
    icon: <LaptopMacRounded titleAccess="Laptop icon" />,
    name: "Laptops",
    link: "/Laptops",
    ariaLabel: "Go to laptop category",
  },
  {
    icon: <PhoneAndroidRounded titleAccess="Phone icon" />,
    name: "Phones",
    link: "/Phones",
    ariaLabel: "Go to phone category",
  },
  {
    icon: <CameraAltRounded titleAccess="Camera icon" />,
    name: "Cameras",
    link: "/Cameras",
    ariaLabel: "Go to camera category",
  },
  {
    icon: <HeadsetMicRounded titleAccess="Audio icon" />,
    name: "Audio",
    link: "/Audio",
    ariaLabel: "Go to audio category",
  },
  {
    icon: <SportsEsportsRounded titleAccess="Gaming Icon" />,
    name: "Gaming",
    link: "/Gaming",
    ariaLabel: "Go to gaming category",
  },
];

const Categories = () => {
  return (
    <section aria-label="Categories section">
      <Layout>
        <Subtitle>Popular Categories</Subtitle>
        <Container>
          {CATEGORIES.map((category) => {
            const { link, name, icon, ariaLabel } = category;
            return (
              <Wrapper key={name}>
                <LinkStyled to={`/category${link}`} aria-label={ariaLabel}>
                  {icon}
                <CategoryName>{name}</CategoryName>
                </LinkStyled>
              </Wrapper>
            );
          })}
        </Container>
      </Layout>
    </section>
  );
};

export default Categories;
