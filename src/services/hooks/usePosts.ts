import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export interface IPostsProps {
  id: number;
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

interface IPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPhotosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface IUsersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getPosts = async ({
  page,
  limitPerPage = 6,
}: IGetPosts): Promise<IPostsProps[]> => {
  const { data: postData } = await api.get<IPostProps[]>(
    `posts?_limit=${limitPerPage}&_page=${page}`
  );

  const { data: postUsers } = await api.get<IUsersProps[]>(
    `users?_limit=${limitPerPage}&_page=1`
  );

  const { data: postPhotos } = await api.get<IPhotosProps[]>(
    `photos?_limit=${limitPerPage}&_page=1`
  );

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });

  const mountedData = postData.map((post, i) => {
    return {
      id: post.id,
      author: postUsers[i].name,
      authorEmail: postUsers[i].email,
      title: post.title,
      article: post.body,
      date: new Date().toLocaleString(),
      imageUrl: postPhotos[i].url,
    };
  });

  return mountedData;
};

export function usePosts(props: IGetPosts) {
  return useQuery(["posts", props], () => getPosts(props), {
    staleTime: Infinity,
    cacheTime: 0,
    enabled: false,
  });
}
