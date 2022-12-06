import { IPostsProps, usePosts } from "../services";
import { useEffect, useRef, useState } from "react";

import { useOberser } from "../hooks/useOberser";
import { ScrollItens } from "../components/ScrollItens";
import { Loading } from "../components/Loading";

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
      <div className="flex flex-wrap mt-5">
        {pageData.map((data, ind) => (
          <ScrollItens data={data} itemLeng={ind % 6} key={ind} />
        ))}
      </div>

      <div ref={loader} />

      {(isFetching || isLoading) && !endPage && <Loading />}
    </>
  );
}
