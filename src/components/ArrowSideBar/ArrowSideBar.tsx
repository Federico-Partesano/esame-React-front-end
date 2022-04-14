import React, { FC, useMemo } from "react";
import { useSideBar } from "../../hook/useSideBar";
import "./ArrowSideBar.scss";
import menuImage from "./../../assets/menu.png";
import cx from "classnames";
interface IArrowSideBar {}

const ArrowSideBar: FC<IArrowSideBar> = () => {
  const [{ isOpen }, toogle] = useSideBar();
  const renderArrow = useMemo(() => {
    return (
      <>
        <div
          onClick={toogle}
          className={`my__container__arrow ${cx({ closed__sidebar: !isOpen, opened__sidebar: isOpen  })}`}
        >
          <img src={menuImage} alt={"menu"} className="image__arrow"></img>
        </div>
      </>
    );
    // eslint-disable-next-line
  }, [isOpen]);

  return (renderArrow);
};

export default ArrowSideBar;
