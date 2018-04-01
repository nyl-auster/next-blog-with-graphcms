import React from "react";
import Link from "next/link";

export default ({ post }) => (
  <div className="post-teaser" style={{ paddingBottom: "2rem" }}>
    <div className="columns">
      <div className="column is-2">
        {/* vérifier si l'image existe avant de l'afficher */}
        {post.coverImage && <img src={post.coverImage.url} />}
      </div>
      <div className="column">
        <div className="title">{post.title}</div>
        <div className="content">{post.content}</div>
      </div>
    </div>
  </div>
);
