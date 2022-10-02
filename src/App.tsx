import React, { useEffect } from "react";
import PostItem from "./components/PostItem";
import UserItem from "./components/UserItem";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { postAPI } from "./services/PostServices";
import { fetchUsers } from "./store/reducers/ActionCreators";

const App = () => {
  //const dispatch = useAppDispatch();
  //const { error, isLoading, users } = useAppSelector((state) => state.users);
  //useEffect(() => {
  //  dispatch(fetchUsers());
  //}, []);

  //!RTK QUERY
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10);
  const { data: users } = postAPI.useFetchAllUsersQuery("");
  return (
    <div>
      {/*<div>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {users.map((user) => (
          <div key={user.id}>
            {user.id}. {user.name}
            <br />
            {user.email}
          </div>
        ))}
      </div>*/}
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>error</h3>}
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
