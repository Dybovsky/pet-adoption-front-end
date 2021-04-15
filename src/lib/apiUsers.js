import axios from "axios";

const BaseUrl = "http://0.0.0.0:5500";

export async function getUsers() {
  const response = await axios.get(`${BaseUrl}/users`);
  return response.data.users;
}

export async function createUser(user) {
  console.log(user);
  const response = await axios.post(`${BaseUrl}/users/signup`, user);
  //return response.data.user;
}
