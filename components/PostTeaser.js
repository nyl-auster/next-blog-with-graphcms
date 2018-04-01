import React from "react";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

export default ({ post }) => (
  <div className="post-teaser" style={{ paddingBottom: "2rem" }}>
    <div className="columns">
      <div className="column is-2">
        {/* vérifier si l'image existe avant de l'afficher */}
        {post.coverImage && <img src={post.coverImage.url} />}
      </div>
      <div className="column">
        <div className="title">{post.title}</div>
        <div className="content">{post.content.substring(0, 500)} ...</div>
        <ButtonLink href={`/post?id=${post.id}`}>Lire la suite</ButtonLink>
      </div>
    </div>
  </div>
);
