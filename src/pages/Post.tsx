import { BigCard } from "../components";
import { PuffLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { usePost } from "../services";

export function Post() {
  const { postId } = useParams();

  const { data, isLoading, isError } = usePost({ postId });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <PuffLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Ocorreu algum erro !</div>;
  }

  return (
    <main className="flex flex-col m-auto bg-white max-w-5xl w-[1024px] my-24 lg:w-auto lg:mx-12">
      <header>
        <BigCard {...data} />
      </header>
      <article className="flex p-28">{data.article}</article>
    </main>
  );
}
