import axios, { Method } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../redux/reducers/loadingFetch";
import  useEndpoints, { Endpoints } from "./useEndpoints";

export const useFetch = () => {
  const [isLoading] = useState(false);
  const dispatch = useDispatch();
  const endpoints = useEndpoints();
  const [error, setError] = useState("");

  const fetch = async <T, K = Record<any, any>, L = Record<any, any>>(config: {
    url: string;
    method: Method;
    params?: L;
    data?: K;
  }) => {
    dispatch(setIsLoading(true));
    try {
      const { data: resp } = await axios.request<T>(config);
      dispatch(setIsLoading(false));
      return resp;
    } catch (e: any) {
      setError(e.response.data.error);
      dispatch(setIsLoading(false));
    }
    return undefined;
  };

  const fetchApi = async <K extends keyof Endpoints>(
    endpoint: K,
    params?: Parameters<Endpoints[K]>
  ): Promise<ReturnType<Endpoints[K]> | {data: undefined}> => {
    dispatch(setIsLoading(true));

    try {
      console.log('endpoint', endpoint);
      
         // @ts-ignore
      const data = await endpoints[endpoint]((params ? params[0] : {}));
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 1000)
      return data as ReturnType<Endpoints[K]>;
    } catch (e: any) {
      console.log("e", e);
      setError(e.response.data.error);
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 1000)
      return {data: undefined}
    }
  };



  // const tr:ArgumentTypes<Endpoints2["getFavorites"]>[0] = []

  // fetchApi("signIn", [{nickname: 'ciao', password: 'ciao2'}])

  return { fetch, fetchApi ,isLoading, error };
};
