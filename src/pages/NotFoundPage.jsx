import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not_found">
      <h1>Not Found Page</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
