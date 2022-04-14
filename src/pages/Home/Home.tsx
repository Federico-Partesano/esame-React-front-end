import React, { FC, Fragment, useEffect, useMemo } from "react";
import ArrowSideBar from "../../components/ArrowSideBar/ArrowSideBar";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useCharacters } from "../../hook/useCharacters";
import { useFavorites } from "../../hook/useFavorites";
import "./Home.scss";

interface IHome {}

const Home: FC<IHome> = () => {
  const { characters:{characters}, callApi } = useCharacters();
  const { fetchFavorites } = useFavorites();

  useEffect(() => {
    callApi();
    fetchFavorites();
    // eslint-disable-next-line
  }, []);

  const cards =  useMemo(() => {
      return (<>
        {characters &&
            characters.results.map((character) => {
              return <Card key={character.id} margin={"1rem"} result={character} />;
            })}
            </>
      )
  }, [characters])

  return (
    <div>
          <ArrowSideBar/>
        <div className="my__container">
          {cards}
        </div>
        <div className="container__pagination">
          <Pagination />
          </div>
    </div>
  );
};

export default Home;
