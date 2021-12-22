import React from "react"
import Layout from "../components/layout"
import Comment from "../components/comment"

const PostTemplate = React.memo(props => {
  const { title, date, html } = props.pageContext

  return (
    <Layout>
      <h2 style={{ fontFamily: "NOTO SANS KR" }}>{title}</h2>
      <h4 style={{ fontFamily: "NOTO SANS KR" }}>{date}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Comment />
    </Layout>
  )
})

PostTemplate.displayName = "PostTemplate"

export default PostTemplate
