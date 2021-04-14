import React from 'react'
import Logo from '../icons/Logo'
import {Container, Wrapper} from './styled'

const PageNoyFound = () => {
    return (
        <Container>
          <Wrapper>
            <Logo width="59px" height="56px" />
            <p>Oops, page not found</p>
          </Wrapper>
        </Container>
      );
}

export default PageNoyFound
