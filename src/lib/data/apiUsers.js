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
