import axios from "axios";
import { useEffect } from "react";

const BaseUrl = "http://localhost:5500/pet";

export async function addPet(pet, token) {
  //const json = JSON.stringify(pet);
  //const response =

  await axios({
    method: "post",
    url: `${BaseUrl}/`,
    data: pet,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getPets() {
  const result = await axios.get(BaseUrl);
  return result.data;
}

export async function getPetsByUserId(token) {
  const result = await axios({
    method: "get",
    url: `${BaseUrl}/user/my`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return result.data.usersPets;
}

export async function setPetImage(petId, token, picture) {
  // const formData = new FormData();
  // formData.append("image", picture);

  // const result = await axios({
  //   method: "put",
  //   url: `${BaseUrl}/picture/${petId}`,
  //   data: { picture },
  // headers: {
  //   Authorization: `Bearer ` + token,
  //   "Content-Type": "multipart/form-data",
  // },
  // });

  const result = await axios.put(`${BaseUrl}/picture/${petId}`, picture, {
    headers: {
      Authorization: `Bearer ` + token,
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;

  // console.log("setimg starts", picture);
  // .then(function (response) {
  //   //console.log(response);
  // })
  // .catch(function (response) {
  //   //console.log(response);
  // });
}

export async function deletePet(petId, token) {
  await axios({
    method: "delete",
    url: `${BaseUrl}/${petId}/`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
}

export async function getPetById(petId, token) {
  const result = await axios({
    method: "get",
    url: `${BaseUrl}/getPet/${petId}/`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return result;
  // .data.response[0];
}

//edit pet

export async function editPet(petId, editedPet, token) {
  const res = await axios({
    method: "put",
    url: `${BaseUrl}/${petId}/`,
    data: { editedPet },
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return res;
}

export async function takePet(petId, token, status) {
  const res = axios({
    method: "post",
    url: `${BaseUrl}/take_pet/${petId}/${status}`,
    // data: { editedPet },
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return res;
}

export async function returnPet(petId, token) {
  const res = axios({
    method: "post",
    url: `${BaseUrl}/return/${petId}`,
    // data: { editedPet },
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return res;
}

// export async function getPetsByType(type) {
//   const result = await axios({
//     method: "get",
//     url: `${BaseUrl}/query/type=${type}`,
//   });

//   return result.data.response;
// }

export async function getPetsByAdvSearch(obj) {
  const result = await axios({
    method: "get",
    url: `${BaseUrl}/query?type=${obj.type}&status=${obj.status}&height=${obj.height}&weight=${obj.weight}&name=${obj.name}`,
  });
  // console.log("result", result);
  return result.data;
}

export async function savePet(id, petId, token) {
  const res = await axios({
    method: "post",
    url: `${BaseUrl}/save/${petId}`,
    data: { id },
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  console.log("res", res.data.id);
  return res.data.id;
}

export async function unsavePet(id, token) {
  console.log("unsave", id, token);
  const res = axios({
    method: "delete",
    url: `${BaseUrl}/unsave/${id}`,
    data: { id },
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return res;
}

export async function getSavedPets(userId, token) {
  const res = axios({
    method: "get",
    url: `${BaseUrl}/saved_pets/${userId}`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return res;
}

export async function getAllPets(token) {
  const result = axios({
    method: "get",
    url: `${BaseUrl}/all_pets/`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });
  return result;
}
