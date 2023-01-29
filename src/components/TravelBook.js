import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TravelBook() {
  const [travels, setTravels] = useState([]);
  const [id, setId] = useState("");
  const fetchData = async () => {
    try {
      const data = await axios.get("http://54.227.195.104:5000/api/travel");
      console.log(data.data.travels);
      setTravels(data.data.travels);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    await axios.delete(`http://54.227.195.104:5000/api/travel/${id}`);

    fetchData();
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <div>
      {travels.map((tb) => (
        <div className="card my-3" key={tb._id}>
          <img src={tb.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.descr}</p>
            <div className="btns d-flex">
              <Link className="btn btn-primary" to={`/update/:${tb._id}`}>
                Update
              </Link>
              <form onSubmit={deleteHandler}>
                <button
                  type="submit"
                  className="btn btn-danger mx-2"
                  onClick={() => setId(tb._id)}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelBook;
