import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"

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

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      {data.allDataYaml.nodes.map(item => (
        <HaikuWrapper>
          <HaikuMeta>
            > #{item.parent.name} <Date>{item.date}</Date>
          </HaikuMeta>
          <Haiku>{item.content}</Haiku>
        </HaikuWrapper>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allDataYaml {
      nodes {
        id
        content
        date(formatString: "YYYY-MM-DD")
        parent {
          ... on File {
            id
            name
          }
        }
      }
    }
  }
`
