import { fetcher } from "../utils/fetcher";
import useSwr from 'swr';

export function useUser(id: number){
    const {data, isLoading, error} = useSwr(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher);

    return {
        user:data,
        isLoading,
        error
    }
}