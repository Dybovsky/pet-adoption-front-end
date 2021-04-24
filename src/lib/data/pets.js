import axios from "axios";

const BaseUrl = "http://localhost:5500/pet";

export async function addPet(pet) {
  //const json = JSON.stringify(pet);
  //const response =
  // console.log(pet);
  await axios.post(BaseUrl, pet);
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
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
}
