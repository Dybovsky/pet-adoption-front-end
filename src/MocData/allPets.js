import { getByPlaceholderText } from "@testing-library/dom";

const fatBarsik = {
  type: "Cat",
  breed: "Cat Gianticus",
  id: Date.now() + 1,
  image: "Barsik.jpeg",
  name: "fat Barsik",
  status: "foster/adopted",
  saved: false,
  height: "30rem",
  weight: "Bold",
  color: "transparent",
  bio: "+",
  allergy: "yes/no",
  dietary: "healthy good fat cat",
};

const fatMurzik = {
  type: "Cat",
  breed: "Cat Gianticus",
  id: Date.now(),
  image: "murzik.jpeg",
  name: "fat Murzik",
  status: "foster/adopted",
  saved: true,
  height: "30rem",
  weight: "Bold",
  color: "transparent",
  bio: "+",
  allergy: "yes/no",
  dietary: "healthy good fat cat",
};

let allPets = [fatBarsik, fatMurzik];
export default allPets;
