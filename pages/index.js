import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PostTeaser from "../components/PostTeaser";
import graphcms from "../services/graphcms";

export default class HomePage extends React.Component {
  static async getInitialProps() {
    const query = `{
      allPosts {
        id
        slug
        coverImage {
          url
        }
        title
        content
        authors {
          id
          name
        }
      }
    }
    `;
    return graphcms.request(query);
  }
  render() {
    return (
      <DefaultLayout>
        <div className="container section">
          {this.props.allPosts.map((post, index) => (
            <PostTeaser key={post.id} post={post} />
          ))}
        </div>
      </DefaultLayout>
    );
  }
}
