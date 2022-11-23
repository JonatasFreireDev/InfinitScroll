import { api } from "../api";
import { useQuery } from "@tanstack/react-query";

export interface IPostProps {
  id: number;
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

interface IPostApiProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPhotosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface IUsersProps {
  id: 1;
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

export const getPost = async ({ postId }: IGetPost): Promise<IPostProps> => {
  const { data: postData } = await api.get<IPostApiProps[]>(
    `posts?id=${postId}`
  );

  const { data: postUsers } = await api.get<IUsersProps[]>(
    `users?id=${postId}`
  );

  const { data: postPhotos } = await api.get<IPhotosProps[]>(
    `photos?id=${postId}`
  );

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });

  return {
    id: postData[0].id,
    author: postUsers[0].name,
    authorEmail: postUsers[0].email,
    title: postData[0].title,
    article: postData[0].body,
    date: new Date().toLocaleString(),
    imageUrl: postPhotos[0].url,
  };
};

export function usePost(props: IGetPost) {
  return useQuery(["post", props], () => getPost(props), {
    staleTime: Infinity,
  });
}
