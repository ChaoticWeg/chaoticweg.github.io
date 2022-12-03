import type { QueryFunction } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

interface GithubUser {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    blog: string;
    location: string;
    email: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
}

type FetchUserResult = GithubUser | null;

const fetchUser: QueryFunction<FetchUserResult, string[]> = async ({ queryKey }) => {
    const username = queryKey[1];

    if (!username || username.length < 1) {
        return null;
    }

    const url = `https://api.github.com/users/${username}`;
    const resp = await Axios.get<GithubUser>(url);

    if (resp.status !== 200) {
        return null;
    }

    return resp.data;
};

export function useUser(username: string) {
    return useQuery({
        queryKey: ["users", username],
        queryFn: fetchUser,
        staleTime: Infinity
    });
}
