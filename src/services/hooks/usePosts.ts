import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export interface IPostsProps {
  id: string;
  author: string;
  authorEmail: string;
  title: string;
  article: string;
  date: string;
  imageUrl: string;
}

export const getPosts = async (page: number): Promise<IPostsProps[]> => {
  const limitPerPage = 6;
  const { data } = await api.get(
    `articles?_limit=${limitPerPage}&_page=${page}`
  );

  return data;
};

export function useUsers(page: number) {
  return useQuery(["posts", page], () => getPosts(page), {
    staleTime: 1000 * 5,
  });
}
