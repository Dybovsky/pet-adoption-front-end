import axios from "axios";

const BaseUrl = "http://0.0.0.0:5500/users";

export async function getUsers() {
  const response = await axios.get(`${BaseUrl}`);
  return response.data.users;
}

export async function createUser(user) {
  // console.log(user);
  const response = await axios.post(`${BaseUrl}/signup`, user);
  return response.data.user;
}

export async function logIn(loginUser) {
  const response = await axios.post(`${BaseUrl}/login`, loginUser);
  return response.data;
}

export async function getUserByEmail(email) {
  const response = await axios.get(`${BaseUrl}/${email}`);
  return response.data.user;
}

export async function deleteUser(userId, token) {
  await axios({
    method: "delete",
    url: `${BaseUrl}/${userId}/`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
}

export async function editUser(authUser, editedUser) {
  console.log("auth", authUser);
  await axios({
    method: "put",
    url: `${BaseUrl}/${authUser.id}/`,
    data: { editedUser },
    headers: {
      Authorization: `Bearer ` + authUser.token,
    },
  });
}
