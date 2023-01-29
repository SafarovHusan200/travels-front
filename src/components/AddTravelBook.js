import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTravelBook() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://54.227.195.104:5000/api/travel/add", {
      title,
      image,
      descr,
    });

    navigate("/");
  };
  return (
    <div className="container mt-5 pt-3">
      <div className="col-md-8 offset-md-2">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            {/* <div id="image" className="form-text"></div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descr" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="descr"
              name="descr"
              onChange={(e) => setDescr(e.target.value)}
              value={descr}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTravelBook;
