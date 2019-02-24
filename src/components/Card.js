import React from "react";


function Card(props) {
  return (
    <>
      <p className="cardContent">
        <strong>{props.name}</strong>
      </p>
      <p className="cardContent">
        {props.meaning}
      </p>
      <p className="cardContent">
        {props.desc}
      </p>
    </>
  );
}

export default Card;