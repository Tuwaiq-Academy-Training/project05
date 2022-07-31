import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createPost } from "../../app/redux/posts/postsSlice";
// import { Post } from "../../types/types";
import "./NewPost.css";

export interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  comments: number;
  likes: number;
}
export function NewPost(){
 
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [postForm, setPostForm] = useState({
    title: "",
    description: "",
    imageURL:"",
   
  });

  const navigate = useNavigate();

  const handlChange = (e: { target: { name: string; value: string } }) => {
    setPostForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { title, description} = postForm;

    const newPost: Post = {
      id: Date.now(),
      title: title,
      description: description,
     
      author: user.email,
      comments: 0,
      likes: 0,
      
    };

    dispatch(createPost(newPost));
    navigate("/");
  };

  return (
    <div className="newPost">
      <div className="newPost__left">
        <form className="newPost__form" onSubmit={handleSubmit}>
          <input
            className="newPost__inputTitle"
            type="text"
            name="title"
            placeholder="New post title here..."
            required
            onChange={handlChange}
          />
          <textarea
            className="newPost__inputDesc"
            placeholder="Write your post content here..."
            name="description"
            required
            onChange={handlChange}
            rows={15}
          />
          <button type="submit" className="newPost__btn">
            Publish
          </button>
        </form>
      </div>
      <div className="newPost__right">
        <p>
          <span>Writing a Great Post Title</span> Think of your post title as a
          super short (but compelling!) description — like an overview of the
          actual post in one short sentence. Use keywords where appropriate to
          help ensure people can find your post by search.
        </p>
        <p>
          <span>Editor Basics</span> 
        </p>
      </div>
    </div>
  );
};


