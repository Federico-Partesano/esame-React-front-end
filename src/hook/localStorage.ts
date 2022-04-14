import { User } from "../models/RespSingIn";

type KeyStorage = {
    token: string;
    user: User
};

export const setStorageItem = <K extends keyof KeyStorage>(key: K, value: KeyStorage[K]) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const removeStorageItem = <K extends keyof KeyStorage>(key: K) => {
    localStorage.removeItem(key);
}

export const getStorageItem = <K extends keyof KeyStorage>(key: K): KeyStorage[K] | null => {
    try{
        return JSON.parse(localStorage.getItem(key)!) as KeyStorage[K];
    } catch(e) {
        console.log('e',e);
        return null;
    }
}




// export type KeyOfType<T, K> = { [P in keyof T]: T[P] extends K ? P : string }[keyof T];



