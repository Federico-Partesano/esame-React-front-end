import React, { FC } from "react";
import "./Loader.scss";

interface ILoader {}

const Loader: FC<ILoader> = () => {
  return (
    <>
    <div className="container__content">
      <div className="content">
        <div className="planet">
          <div className="ring"></div>
          <div className="cover-ring"></div>
          <div className="spots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>loading</p>
      </div>
      </div>
    </>
  );
};

export default Loader;
