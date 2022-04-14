import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import sidebar from "./sidebar";
import characters from "./characters";
import favorites from "./favorites";
import loadingFetch from "./loadingFetch";


export const rootReducer = combineReducers({
    counter,
    sidebar,
    characters,
    favorites,
    loadingFetch 
});

export type RootReducer = ReturnType<typeof rootReducer>