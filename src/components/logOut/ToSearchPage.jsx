import { Link } from "react-router-dom";
const ToSearchPage = () => {
  return (
    <div>
      <Link to="/search">
        <button className="btn-primary">Start Search</button>
      </Link>
    </div>
  );
};

export default ToSearchPage;
