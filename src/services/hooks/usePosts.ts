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

export interface IGetPosts {
  page: number;
  limitPerPage?: number;
}

export const getPosts = async ({
  page,
  limitPerPage = 6,
}: IGetPosts): Promise<IPostsProps[]> => {
  const { data } = await api.get(
    `articles?_limit=${limitPerPage}&_page=${page}`
  );

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });

  return data;
};

export function usePosts(props: IGetPosts) {
  return useQuery(["posts", props], () => getPosts(props), {
    staleTime: Infinity,
    keepPreviousData: true,
  });
}
