import React, { FC, useCallback, useMemo } from "react";
import { Result } from "../../models/RespCharacters";
import heart from "../../assets/heart.png";
import male from "../../assets/male.png";
import female from "../../assets/female.png";
import live from "../../assets/live.png";
import dead from "../../assets/dead.png";
import question from "../../assets/question.png";
import cx from "classnames";
import "./Card.scss";
import { useFavorites } from "../../hook/useFavorites";

interface ICard {
  result: Result;
  margin?: number | string;
}

const Card: FC<ICard> = ({ result, margin = 0 }) => {
  const { addNewFavorite, favorites } = useFavorites();

  const isLiked = useCallback(
    (id: number) => favorites.some(({ id: idFavorite }) => idFavorite === id),
    [favorites]
  );

  const heartImageFront = useMemo(() => {
    return (
      <img
        src={heart}
        className={`front__heart ${cx({
          liked: isLiked(result.id),
          not__liked: !isLiked(result.id),
        })}`}
        alt={"heart"}
      />
    );
    // eslint-disable-next-line
  }, [favorites, result]);
  const heartImageBack = useMemo(() => {
    return (
      <img
        src={heart}
        className={`heart ${cx({
          liked: isLiked(result.id),
          not__liked: !isLiked(result.id),
        })}`}
        alt={"like"}
      />
    );
    // eslint-disable-next-line
  }, [favorites, result]);

  return (
    <div
      onClick={() => addNewFavorite(result)}
      className="wrapper"
      style={{ margin }}
    >
      <div className="card front-face">
        <img src={result.image} alt={"avatar"} />
        {heartImageFront}
      </div>
      <div className="card back-face">
        <img src={result.image} alt={"avatar"} />
        <div className="info">
          <div className="title">{result.name}</div>
        </div>
        <ul>
          {heartImageBack}
          <img
            src={result.gender === "Male" ? male : female}
            className="heart"
            alt={"genre"}
          />
          <img
            src={
              result.status === "Alive"
                ? live
                : result.status === "Dead"
                ? dead
                : question
            }
            className="heart"
            alt={"genre"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Card;
