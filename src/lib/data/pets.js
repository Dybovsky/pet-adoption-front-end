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
