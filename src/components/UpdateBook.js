import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateBook() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");

  let { id } = useParams();
  id = id.slice(1);
  const navigate = useNavigate();

  const fetchData = async () => {
    const datas = await axios.get(`http://54.227.195.104:5000/api/travel/`);
    const data = datas.data.travels.find((p) => p._id === id);
    setTitle(data.title);
    setImage(data.image);
    setDescr(data.descr);
    console.log(data);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://54.227.195.104:5000/api/travel/${id}`, {
      title,
      image,
      descr,
    });

    navigate("/");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5 pt-3">
      <div className="col-md-8 offset-md-2">
        <form onSubmit={updateHandler}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
              defaultValue={image}
              onChange={(e) => setImage(e.target.value)}
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
              defaultValue={descr}
              onChange={(e) => setDescr(e.target.value)}
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

export default UpdateBook;
