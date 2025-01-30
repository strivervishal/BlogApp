import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://blog-app-alpha-umber.vercel.app/api/posts",
      formData
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        className="block border p-2 w-full mb-2"
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        className="block border p-2 w-full mb-2"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="block border p-2 w-full mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Post
      </button>
    </form>
  );
}

export default AddPost;
