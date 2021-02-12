import React from "react"

const BlogDetail = props => (
  <section
    style={{
      margin: `30px 0px`,
    }}
  >
    <img alt={props.thumbnail.alt} src={props.thumbnail.url} />

    <div>
      {props.heading.map(h => {
        return <h2 key={h}>{h.text}</h2>
      })}
    </div>
  </section>
)

export default BlogDetail
