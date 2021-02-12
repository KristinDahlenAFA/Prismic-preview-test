import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogdetail from "../components/blogDetail"

class Blogdetailpage extends Component {
  render() {
    const { data } = this.props.data.blog
    const heading = data.heading
    const thumbnail = data.thumbnail
    const description = data.description
    return (
      <Layout>
        <SEO title="Page two" />
        <div
          style={{
            margin: `30px 0px`,
          }}
        >
          <Link to={`/`}>Go back</Link>
          <Blogdetail
            heading={heading}
            thumbnail={thumbnail}
            description={description}
          />
        </div>
      </Layout>
    )
  }
}

export default Blogdetailpage

export const blogQuery = graphql`
  query Blog($slug: String) {
    blog: prismicArticles(id: { eq: $slug }) {
      data {
        heading {
          text
        }
        thumbnail {
          url
          alt
        }
      }
    }
  }
`
