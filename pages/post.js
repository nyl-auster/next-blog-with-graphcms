import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PostDetail from "../components/PostDetail";
import graphcms from "../services/graphcms";

/**
 * Affiche un post spécifique
 */
export default class PostPage extends React.Component {
  static async getInitialProps(req) {
    // l'url est de la forme "/post?id=xxxx"
    // req.query.id permet de récupérer l'id de l'url
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
