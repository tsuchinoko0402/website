import React from "react"
import cheerio from "cheerio"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"

export type TocTypes = {
  text: string
  id: string
  name: string
}

interface Props {
  htmlString: string
}

const StyledToc = styled.div`
  & .list.h2 {
    margin-left: 1em;
  }

  & .list.h3 {
    margin-left: 2em;
  }
`

const Toc: React.FC<Props> = props => {
  const { htmlString } = props
  const $ = cheerio.load(htmlString)
  const toc = $("h1, h2, h3")
    .toArray()
    .map(data => ({
      text: data.children[0].data,
      id: data.attribs.id,
      name: data.name,
    }))

  return (
    <>
      {toc.length ? (
        <div id="create-table-of-contents">
          <h4>目次</h4>
          <StyledToc>
            <ul id="lists">
              {toc.map((toc, index) => {
                return (
                  <li className={"list " + toc.name} key={toc.id}>
                    <a href={"#" + toc.id}>{toc.text}</a>
                  </li>
                )
              })}
            </ul>
          </StyledToc>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Toc
