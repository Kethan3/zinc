import React, { Suspense } from "react";
import PostsLists from "./components/PostsLists";
import ClientPostsList from "./components/ClientPostsList";

const PostsPage = () => {
  return (
    <div className="container mx-auto">
      <h1>Posts</h1>
      {/* <Suspense
        fallback={<div className="container mx-auto">Loading.....</div>}
      >
        <PostsLists />
      </Suspense> */}

      <ClientPostsList />
    </div>
  );
};

export default PostsPage;
