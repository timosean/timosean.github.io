import React, { createRef, useEffect } from "react"

const Comment = () => {
  const commentRef = createRef()

  useEffect(() => {
    const utterances = document.createElement("script")

    const utterancesConfig = {
      src: `https://utteranc.es/client.js`,
      repo: `timosean/timosean.github.io`,
      "issue-term": "pathname",
      label: "Comment",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true,
    }

    Object.entries(utterancesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    commentRef.current.appendChild(utterances)
  }, [])

  return (
    <div
      className="comments"
      style={{ width: "100vw", position: "static", marginBottom: "20px" }}
      ref={commentRef}
    />
  )
}

export default Comment
