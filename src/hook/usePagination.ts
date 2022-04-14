import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/reducers";
import { setCharacters } from "../redux/reducers/characters";
import { useFetch } from "./useFetch";

export const usePagination = () => {
  const { fetchApi } = useFetch();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { characters } = useSelector(
    ({ characters }: RootReducer) => characters
  );

  useEffect(() => {
    if (!characters) return;
    const nextPage = characters.info.next;
    const prevPage = characters.info.prev;
    // eslint-disable-next-line
    const [_, currentPage] = (nextPage || prevPage).split("=");
    setPage(currentPage - (nextPage ? 1 : -1));
  }, [characters]);

  const nextPage = async () => {
    if (!characters || !characters.info.next) return;
    const { data: resp } = await fetchApi("characters", [
      {},
      characters.info.next,
    ]);
    resp && dispatch(setCharacters(resp));
    return resp;
  };
  const prevPage = async () => {
    if (!characters || !characters.info.prev) return;
    const { data: resp } = await fetchApi("characters", [
      {},
      characters.info.prev,
    ]);
    resp && dispatch(setCharacters(resp));
    return resp;
  };

  const changePage = async (newPage: number) => {
    const { data: resp } = await fetchApi("characters", [{ page: newPage }]);
    resp && dispatch(setCharacters(resp));
    return resp;
  };

  return {
    nextPage,
    prevPage,
    pages: characters?.info.pages,
    page,
    changePage,
  };
};
