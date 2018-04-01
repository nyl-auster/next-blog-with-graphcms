import React from "react";
import DefaultLayout from "../components/DefaultLayout";

export default class PostPage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div className="container section">
          <p>Je suis une page de post</p>
        </div>
      </DefaultLayout>
    );
  }
}
