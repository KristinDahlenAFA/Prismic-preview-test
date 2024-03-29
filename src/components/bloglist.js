import React from "react"
import { Link } from "gatsby"

const Bloglist = props => (
  <div
    style={{
      flex: `1`,
    }}
  >
    <Link to={`/detail/${props.slug}`}>
      <img alt={props.data.thumbnail.alt} src={props.data.thumbnail.url} />
      <div>
        {props.data.heading.map(h => {
          return <h6 key={h}>{h.text}</h6>
        })}
      </div>
    </Link>
  </div>
)
export default Bloglist
