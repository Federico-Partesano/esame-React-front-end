import { useDispatch, useSelector } from "react-redux";
import { Result } from "../models/RespCharacters";
import { RootReducer } from "../redux/reducers";
import { addFavorites, deleteFavorite, getFavorites } from "../redux/reducers/favorites";
import { useFetch } from "./useFetch";

export const useFavorites = () => {
  const {favorites} = useSelector(({ favorites }: RootReducer) => favorites);

  const { fetchApi } = useFetch();
  const dispatch = useDispatch();

  const addNewFavorite = async (character: Result) => {
    const characterStringify = JSON.stringify(character);
    const {data: resp} = await fetchApi("addFavorite", [{ character: characterStringify }]);
    console.log("resp", resp);

    resp &&
      resp.action === "added" &&
      resp.character &&
      dispatch(addFavorites(character));
    resp &&
      resp.action === "deleted" &&
      resp.character &&
      dispatch(deleteFavorite(character));
    return resp;
  };

  const fetchFavorites = async () => {
    const {data: resp} = await fetchApi("getFavorites", []);
    
   resp && dispatch(getFavorites(resp.characters));

  };

  //   const addFAvorites = (favorites: Result[] | Result) => {
  //     dispatch(addFavorites(favorites));
  //   };

  return { favorites, addNewFavorite, fetchFavorites };
};
