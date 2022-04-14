import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import "./Header.scss";
import rick from "../../assets/rick.png";
import { useSideBar } from "../../hook/useSideBar";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { getStorageItem, removeStorageItem } from "../../hook/localStorage";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/reducers";
import arrow from "../../assets/arrow.png";

interface IHeader {}

const Header: FC<IHeader> = () => {
  const [{ isOpen: sidebar }, toogleSideBar] = useSideBar();
  const { favorites } = useSelector(({ favorites }: RootReducer) => favorites);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [nickname] = useState(getStorageItem("user"));

  const isCurrentPage = useCallback(
    (page: string): boolean => pathname.includes(page),
    [pathname]
  );

  const logout = () => {
    removeStorageItem("token");
    removeStorageItem("user");
    navigate("/login");
  };

  const footer = useMemo(() => {
    return (
      <>
        {nickname && (
          <DropdownButton
            className="my__dropdown"
            as={ButtonGroup}
            key={"up"}
            id={`dropdown-button-drop-${"up"}`}
            drop={"up"}
            variant={"secondary"}
            title={
              <>
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">
                  {nickname.nickname}
                </span>
              </>
            }
          >
            <Dropdown.Item eventKey="4" onClick={logout}>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        )}
      </>
    );
    // eslint-disable-next-line
  }, [nickname]);

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className={`col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark my__sidebar ${cx(
            { opened: sidebar, closed: !sidebar }
          )}`}
        >
          <img
            src={arrow}
            className="arrow"
            onClick={toogleSideBar}
            alt={"arrow"}
          />
          <div
            className={`d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 section__left ${cx(
              { opened__opacity: sidebar, closed__opacity: !sidebar }
            )}`}
          >
            <div className="d-flex justify-content-center align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <img className="logo" src={rick} alt={"logo"} />
            </div>
            <ul
              className="nav nav-pills ul__menu flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <div className="nav-link align-middle px-0">
                  <Link
                    className={`link ms-1 d-none d-sm-inline me-2 ${cx({current__page: isCurrentPage("home")})}`}
                    to={"/home"}
                  >
                    <i className="fs-4 bi-house"></i>
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </Link>
                </div>
              </li>
              <li className="nav-item width-100">
                <div className="nav-link align-middle px-0">
                  <div className="container__favorites">
                    <Link
                      className={`link ms-1 d-none d-sm-inline me-2 ${cx({current__page: isCurrentPage("favorites")})}`}
                      to={"/favorites"}
                    >
                      Favorites
                    </Link>
                    <div className="total__favorites">
                      {favorites.length ?? 0}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <hr />
            {footer}
          </div>
        </div>
        <div
          className={`col py-3 section__right ${cx({
            opened: sidebar,
            closed: !sidebar,
            closed__col: !sidebar,
          })}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Header;
