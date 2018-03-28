import React from "react";

const Card = ({id, name, email, picture}) => {
  return (
    <div className="bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
      <img src={`${picture}`} width="200" height="200" alt={`${name}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
