import axios from "axios";
import { useMemo } from "react";
import { RespAddFavorite } from "../models/RespAddFavorite";
import { RespCharacters, Result } from "../models/RespCharacters";
import { RespSignUp } from "../models/RespSignUp";
import { RespSignIn } from "../models/RespSingIn";

const apiURL = `http://localhost:3001`;

const useEndpoints = () => 
   useMemo(() =>({
      signup: (body: Record<'nickname' | 'password', string>) => axios.post<RespSignUp>(`${apiURL}/users/signup`, body),
      signIn: (body: Record<'nickname' | 'password', string>) => axios.post<RespSignIn>(`${apiURL}/users/signin`, body),
      addFavorite: (body: Record<'character', string>) => axios.post<RespAddFavorite>(`${apiURL}/favorites/`, body),
      getFavorites: () => axios.get<{ characters: Result[] }>(`${apiURL}/favorites/`),
      characters: (paramsUrl: Record<any, any>, url?: string) => axios.get<RespCharacters>(( url ?? `https://rickandmortyapi.com/api/character` ), {params: {...paramsUrl}}),
  }) as const , []);

  



export type Endpoints = ReturnType<typeof useEndpoints>;
export default useEndpoints;
