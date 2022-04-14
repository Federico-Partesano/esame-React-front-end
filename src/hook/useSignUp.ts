import { useFetch } from "./useFetch";

export const useSignUp = () => {
  const { fetchApi , isLoading, error } = useFetch();
  const callApi = async(data: Record<"nickname" | "password", string>) => {
    const {data: resp} = await fetchApi("signup", [data])
    return resp;
  };

  return {callApi, isLoading, error}
};
