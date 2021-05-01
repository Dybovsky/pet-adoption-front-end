import { Link } from "react-router-dom";

const ToMyPetsPage = () => {
  return (
    <div>
      <Link to="/myPets">
        <button className="btn-primary">Go to my pets</button>
      </Link>
    </div>
  );
};

export default ToMyPetsPage;
