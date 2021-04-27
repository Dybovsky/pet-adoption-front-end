import axios from "axios";

const BaseUrl = "http://localhost:5500/pet";

export async function addPet(pet, token) {
  //const json = JSON.stringify(pet);
  //const response =

  await axios({
    method: "post",
    url: BaseUrl,
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

export async function setPetImage(petId, token, picture) {
  const formData = new FormData();
  formData.append("image", picture);
  const result = await axios({
    method: "put",
    url: `${BaseUrl}/${petId}/picture`,
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ` + token,
    },
  })
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (response) {
      //console.log(response);
    });
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
    url: `${BaseUrl}/${petId}/`,
    headers: {
      Authorization: `Bearer ` + token,
    },
  });

  return result;
  // .data.response[0];
}

//edit pet

export async function editPet(petId, editedPet) {
  const res = await axios({
    method: "put",
    url: `${BaseUrl}/${petId}/`,
    data: editedPet,
    // headers: {
    //   Authorization: `Bearer ` + token,
    // },
  });
  return res;
}
