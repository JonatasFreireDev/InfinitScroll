import { BigCard } from "../components";
import { PuffLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { usePost } from "../services";

export default function Post() {
  const { postId } = useParams();

  const { data, isLoading, isError } = usePost({ postId });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-[90vw] h-[90vh]">
        <PuffLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[calc(100vh-98px)] justify-center items-center bg-gray-500 bg-opacity-40 text-md text-center text-white">
        Ocorreu algum erro, <br />
        por favor, tente novamente !
      </div>
    );
  }

  return (
    <main className="flex flex-col m-auto bg-white max-w-5xl w-[80%] my-24 lg:w-auto lg:mx-12">
      <header>
        <BigCard {...data} />
      </header>
      <article
        dangerouslySetInnerHTML={{ __html: data.article }}
        className="flex min-h-[200px] justify-center items-center p-14 flex-col font-sm text-sm text-gray-500"
      />
    </main>
  );
}
