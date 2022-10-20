import { Card, CardImgRight } from "../components";
import { IPostsProps, usePosts } from "../services";
import { useEffect, useRef, useState } from "react";

import { PuffLoader } from "react-spinners";
import { useOberser } from "../hooks/useOberser";

export function Main() {
  const loader = useRef<HTMLDivElement>(document.createElement("div"));
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState<Array<Array<IPostsProps>>>([]);
  const { isEntry } = useOberser(loader);

  const { data, isLoading, isFetching } = usePosts({
    page: page,
  });

  useEffect(() => {
    if (isEntry) setPage((old) => old + 1);
  }, [isEntry]);

  useEffect(() => {
    if (data) {
      setPageData((old) => [...old, [...data]]);
    }
  }, [data]);

  return (
    <>
      {pageData.map((data) => {
        return (
          <div className="mt-14" key={page + data[0].id}>
            <section className="flex flex-auto mt-14 md:flex-col md:justify-center md:items-center">
              <Card {...data[0]} />
              <Card {...data[1]} />
            </section>

            <section className="flex flex-auto mt-14 justify-end md:flex-col md:justify-center md:items-center">
              <Card {...data[2]} size="lg" />
            </section>

            <section className="flex flex-auto mt-14 md:flex-col md:justify-center md:items-center">
              <CardImgRight {...data[3]} />
              <CardImgRight {...data[4]} />
            </section>

            <section className="flex flex-auto mt-14 md:flex-col md:justify-center md:items-center">
              <Card {...data[5]} size="lg" />
            </section>
          </div>
        );
      })}

      <div ref={loader} />

      {(isFetching || isLoading) && (
        <div className="flex justify-center items-center w-full h-60">
          <PuffLoader />
        </div>
      )}
    </>
  );
}
