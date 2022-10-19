import { Card, CardImgRight, ICard } from "../components";

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
      <section className="flex flex-auto mt-14">
        <Card {...teste} />
        <Card {...teste} />
      </section>
      <section className="flex flex-auto mt-14 justify-end">
        <Card {...teste} size="lg" />
      </section>

      <section className="flex flex-auto mt-14">
        <CardImgRight {...teste} />
        <CardImgRight {...teste} />
      </section>

      <section className="flex flex-auto mt-14">
        <Card {...teste} size="lg" />
      </section>

      <div ref={loader}> Loading...</div>
    </div>
  );
}
