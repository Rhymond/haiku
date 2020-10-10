import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const HaikuWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
`

const HaikuMeta = styled.div`
  white-space: nowrap;
  margin-bottom: 8px;
`

const Haiku = styled.div`
  font-size: 24px;
`

const Date = styled.span`
  color: grey;
`

export default function Home() {
  return (
    <Layout>
      <HaikuWrapper>
        <HaikuMeta>
          > #1 <Date>2020-12-12</Date>
        </HaikuMeta>
        <Haiku>
          school is 10 months long
          <br />
          each day we learn something new
          <br />
          school can help us grow
        </Haiku>
      </HaikuWrapper>
      <HaikuWrapper>
        <HaikuMeta>
          > #1 <Date>2020-12-12</Date>
        </HaikuMeta>
        <Haiku>
          school is 10 months long
          <br />
          each day we learn something new
          <br />
          school can help us grow
        </Haiku>
      </HaikuWrapper>
    </Layout>
  )
}
