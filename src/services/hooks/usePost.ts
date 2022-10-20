import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export interface IPostProps {
  id: string;
  author: string;
  authorEmail: string;
  title: string;
  article: string;
  date: string;
  imageUrl: string;
}

export interface IGetPost {
  postId?: string;
}

export const getPost = async ({ postId }: IGetPost): Promise<IPostProps> => {
  const { data } = await api.get(`articles/${postId}`);

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  return data;
};

export function usePost(props: IGetPost) {
  return useQuery(["post", props], () => getPost(props), {
    staleTime: 1000 * 5,
    keepPreviousData: true,
  });
}
