import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/reducers";
import { setCharacters } from "../redux/reducers/characters";
import { useFetch } from "./useFetch";

export const useCharacters = () => {
  const { fetchApi, isLoading, error } = useFetch();
  const dispatch = useDispatch();
  const characters = useSelector(({ characters }: RootReducer) => characters);

  const callApi = async () => {
    const {data: resp} = await fetchApi("characters");
      
    resp && dispatch(setCharacters(resp));
    return resp;
  };


  return { callApi, characters, isLoading, error };
};
