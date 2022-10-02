import React, { FC } from "react";
import { IPost } from "./../models/IPost";
interface PostItemProps {
  post: IPost;
}
export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid teal",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 200px 0 0",
      }}
    >
      {post.id}. {post.title}
      <br />
      {post.body}
      <button>delete</button>
    </div>
  );
};

export default PostItem;
