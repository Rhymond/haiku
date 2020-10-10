import React from "react"
import styled from "styled-components"

import "./normalize.css"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Courier Prime", monospace;
`

const Container = styled.div`
  min-height: 100vh;
  width: 640px;
`

const Header = styled.header`
  text-align: center;
  padding: 40px 0;
  font-size: 36px;
`

export default function Layout(props) {
  const { children } = props
  return (
    <Wrapper>
      <Container>
        <Header>Haiku</Header>
        <div>{children}</div>
      </Container>
    </Wrapper>
  )
}
