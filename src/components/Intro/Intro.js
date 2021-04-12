import React, { useEffect } from "react";
import Logo from "../icons/Logo";
import { useUser } from "../../context/user/UserContext";
import { Container, Wrapper, WrapperLogo,WrapperError, Text } from "./styled";
import { useHistory } from "react-router-dom";

const Intro = () => {
  const {
    state: { user, loading, error },
  } = useUser();
  const history = useHistory();

    useEffect(() => {
      if (user.name) {
        setTimeout(() => {
          history.push("/home");
        }, 3000);
      }
    }, [user]);
    if(error){
        return (
            <Container>
                <WrapperError>
                    <span className='error-oops'>Oops,</span>
                    <span className='error-message'>something went wrong =/</span>
                </WrapperError>
            </Container>
        )
    }
  return (
    <Container>
      <Wrapper>
        <span className="hello">Hello!</span>
        {!loading && <span className="name">{user.name}</span>}
      </Wrapper>
      <WrapperLogo>
        <Logo width="90px" height="93px" />
        <Text>Loading...</Text>
      </WrapperLogo>
    </Container>
  );
};

export default Intro;
