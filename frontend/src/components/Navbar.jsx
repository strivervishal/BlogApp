import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">
        BlogApp
      </Link>
      <div>
        <Link to="/add-post" className="px-4">
          Add Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
