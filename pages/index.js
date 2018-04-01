import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PostTeaser from "../components/PostTeaser";
import graphcms from "../services/graphcms";

export default class HomePage extends React.Component {
  static async getInitialProps({ req }) {
    const query = `{
      allPosts {
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
            <PostTeaser key={index} post={post} />
          ))}
        </div>
      </DefaultLayout>
    );
  }
}
