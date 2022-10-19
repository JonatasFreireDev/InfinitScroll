import { Card, CardImgRight, ICard } from "../components";

import { PuffLoader } from "react-spinners";
import { useOberser } from "../hooks/useOberser";
import { useRef } from "react";

const teste: ICard = {
  author: "Jonatas Freire",
  description: "Loren Loren Loren Loren Loren Loren Loren Loren ",
  link: "#",
  src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  title: "Testando o componente",
};

export default function Main() {
  const loader = useRef<HTMLDivElement>(document.createElement("div"));

  const { isEntry } = useOberser(loader);

  console.log(isEntry);

  return (
    <div className="mt-14">
      <section className="flex flex-auto mt-14 md:flex-col md:justify-center md:items-center">
        <Card {...teste} />
        <Card {...teste} />
      </section>
      <section className="flex flex-auto mt-14 justify-end md:flex-col md:justify-center md:items-center">
        <Card {...teste} size="lg" />
      </section>

      <section className="flex flex-auto mt-14 md:flex-col md:justify-center md:items-center">
        <CardImgRight {...teste} />
        <CardImgRight {...teste} />
      </section>

      <section className="flex flex-auto mt-14 md:flex-col md:justify-center md:items-center">
        <Card {...teste} size="lg" />
      </section>

      <div
        ref={loader}
        className="flex justify-center items-center w-full h-60"
      >
        <PuffLoader />
      </div>
    </div>
  );
}
