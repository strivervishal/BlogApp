import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPost from "./pages/AddPost";
import PostList from "./pages/PostList";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/view-post/:id" element={<ViewPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
