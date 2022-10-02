import React, { FC } from "react";
import { IUser } from "../models/IUser";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div
      style={{
        border: "1px solid teal",
        display: "flex",
        justifyContent: "space-between",
        margin: "0 200px 0 0",
      }}
    >
      {user.id}. {user.name}
      <br />
      {user.email}
      <button>delete</button>
    </div>
  );
};

export default UserItem;
