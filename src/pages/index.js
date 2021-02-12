import React from "react"

import Layout from "../components/layout"
import Bloglist from "../components/bloglist"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <h3>My Articles</h3>
    <div
      style={{
        display: `flex`,
        gap: `20px`,
      }}
    >
      {props.data.bloglist.edges.map(bloglist => (
        <Bloglist
          key={bloglist.node.slugs}
          slug={bloglist.node.slugs[0]}
          data={bloglist.node.data}
        />
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const BlogQuery = graphql`
  query Blogs {
    bloglist: allPrismicArticles {
      edges {
        node {
          slugs
          id
          data {
            heading {
              text
            }

            thumbnail {
              url
              alt
            }
            description {
              text
            }
          }
        }
      }
    }
  }
`
