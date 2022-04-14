import React, { FC, useEffect, useMemo } from 'react';

import ArrowSideBar from '../../components/ArrowSideBar/ArrowSideBar';
import Card from '../../components/Card/Card';
import { useCharacters } from '../../hook/useCharacters';
import { useFavorites } from '../../hook/useFavorites';
import dogImage from "../../assets/dog.png";
import "./Favorites.scss";

interface IFavorites {

}

const Favorites: FC<IFavorites> = () => {


    const { favorites } = useFavorites();
    const { fetchFavorites } = useFavorites();
    useEffect(() => {      
     !favorites.length && fetchFavorites();
      // eslint-disable-next-line
    }, []);
  
    const cards =  useMemo(() => {
        return (<>
          {favorites &&
              favorites.map((favorite) => {
                return <Card key={favorite.id} margin={"1rem"} result={favorite} />;
              })}
              </>
        )
    }, [favorites]);
    const renderEmptyFavorites = useMemo(() => {
        return (
            <div className='container__empty__favorites'>
                <p className='text'>Empty favorites list!</p>
                <img src={dogImage} className="image" alt='dog'></img>
            </div>
        )
    }
    , [])
    
return (
    <div>
    <ArrowSideBar/>
  <div className="my__container">
    {favorites.length ? cards : renderEmptyFavorites}
  </div>
  </div>
)
};

export default Favorites;