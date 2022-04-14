import React, { Suspense, lazy } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import { RootReducer } from "./redux/reducers";
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));

const App = () => {
  const { isLoading } = useSelector(({loadingFetch}: RootReducer) =>loadingFetch);

  return (<>
  {isLoading && <Loader></Loader> }
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/" element={<Header />}>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
    </>
  );
};

export default App;
