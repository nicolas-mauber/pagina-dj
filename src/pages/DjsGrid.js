import React, { useEffect, useState } from "react";

const DjsGrid = () => {
  const [user, setUser] = useState({ name: "", email: "", picture: "" });

  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then(res => res.json())
      .then(data => {
        const userData = {
          name: data.results[0].name.first,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail
        };
        setUser(userData);
      });
  }, []);

  return (
    <div>
      <div className="card text-white bg-info mb-3">
        <div className="card-header">
          <img
            className="foto-persona"
            src={user.picture}
            alt="foto dj1"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">
          {user.email}
          </p>
        </div>
      </div>

      {/* {user ? (
        <div>
          <div>
            <h4></h4>
          </div>
          <div>
            <p></p>
          </div>
          
        </div>
      ) : null}  */}
    </div>
  );
};

export default DjsGrid;
