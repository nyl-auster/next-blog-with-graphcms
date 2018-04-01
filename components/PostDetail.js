import React from "react";
import Link from "next/link";

export default ({ post }) => (
  <div className="post-detail" style={{ paddingBottom: "2rem" }}>
    {post.coverImage && (
      <div
        style={{
          height: "400px",
          background: `url(${post.coverImage.url})`,
          backgroundSize: "cover"
        }}
      />
    )}
    <div className="container section">
      <div className="title">{post.title}</div>
      <div className="content">{post.content} </div>
    </div>
  </div>
);
