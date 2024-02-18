import React from "react";
import Search from "./Search";
import Usercard from "./Usercard";
const Users = ({ userdata }) => {
  return (
    <>
      <Search />
      <Usercard data={userdata} />
    </>
  );
};

export default Users;
