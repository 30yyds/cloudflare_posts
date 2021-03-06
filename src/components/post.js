import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://serverless-api.30yyds.workers.dev/api/posts/${id}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div align="center">
      <h1>{post.title}</h1>
      <h2>Author: {post.username}</h2>
      <p>{post.content}</p>
      <h2>
        <Link to={`/`}>Go back</Link>
      </h2>
    </div>
  );
};

export default Post;
