const fatBarsik = {
  type: "C",
  breed: "Cat Gianticus",
  id: Date.now() + 1,
  image: "Barsik.jpeg",
  name: "fat Barsik",
  status: "foster",
  saved: true,
  height: "30rem",
  weight: "Bold",
  color: "transparent",
  bio: "+",
  allergy: "yes/no",
  diet: "healthy good fat cat",
};

const fatMurzik = {
  type: "C",
  breed: "Cat Gianticus",
  id: Date.now(),
  image: "murzik.jpeg",
  name: "fat Murzik",
  status: "adopted",
  saved: false,
  height: "30rem",
  weight: "Bold",
  color: "transparent",
  bio: "+",
  allergy: "yes/no",
  diet: "healthy good fat cat",
};

let allPets = [fatBarsik, fatMurzik];
export default allPets;
