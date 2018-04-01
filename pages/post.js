import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PostDetail from "../components/PostDetail";
import graphcms from "../services/graphcms";

export default class HomePage extends React.Component {
  static async getInitialProps(req) {
    const query = `{
      Post(id:"${req.query.id}") {
        id
        content
        coverImage {
          id
          url
        }
      }
    }    
    `;
    return graphcms.request(query);
  }
  render() {
    return (
      <DefaultLayout>
        <PostDetail post={this.props.Post} />
      </DefaultLayout>
    );
  }
}
