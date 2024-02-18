export const GetAllUsers = async () => {
  const response = await fetch("https://api.github.com/users");
  const alluser = await response.json();
  return alluser;
};

export const GetSingleUser = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const singleUser = await response.json();
  return singleUser;
};
