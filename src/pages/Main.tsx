import { IPostsProps, usePosts } from "../services";
import { useEffect, useRef, useState } from "react";

import { PuffLoader } from "react-spinners";
import { useOberser } from "../hooks/useOberser";
import { ScrollItens } from "../components/ScrollItens";

export default function Main() {
  const loader = useRef<HTMLDivElement>(document.createElement("div"));
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState<IPostsProps[]>([]);
  const [endPage, setEndPage] = useState(false);
  const { isEntry } = useOberser(loader);

  const { data, isLoading, isFetching, isFetched, refetch } = usePosts({
    page,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (isEntry && !endPage) {
      refetch();
    }
  }, [isEntry]);

  useEffect(() => {
    if (data && data.length < 6) {
      setEndPage(true);
    }

    if (data) {
      setPageData((old) => [...old, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (isFetched) {
      setPage((old) => old + 1);
    }
  }, [isFetched]);

  return (
    <>
      <div className="flex flex-wrap mt-14">
        {pageData.map((data, ind) => (
          <ScrollItens data={data} itemLeng={ind % 6} key={ind} />
        ))}
      </div>

      <div ref={loader} />

      {(isFetching || isLoading) && !endPage && (
        <div className="flex justify-center items-center w-full h-60">
          <PuffLoader />
        </div>
      )}
    </>
  );
}
