import React from "react";
// import "./title.scss"

const Title = ({shortTitle, longTitle}) => {
  return (
    <div className="title">
      <div>
        <h1 className="title__short">
          {shortTitle}
        </h1>
        <b className="title__long">
          {longTitle}
        </b>
      </div>
    </div>
  );
};

export default Title;
