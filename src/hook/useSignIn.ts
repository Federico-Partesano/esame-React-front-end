import { setStorageItem } from "./localStorage";
import { useFetch } from "./useFetch";

export const useSignIn = () => {
  const { fetchApi, isLoading, error } = useFetch();

  const callApi = async(data: Record<"nickname" | "password", string>) => {
    const {data: resp} = await fetchApi("signIn", [data])
    console.log('resp', resp);
    
    resp && setStorageItem("token", resp.token);
    resp && setStorageItem("user", resp.user);
    return resp;
  };

  return {callApi, isLoading, error}
};
