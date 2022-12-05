import { IPostsProps } from "../../services";
import { Card, CardImgRight } from "../Card";

interface ScrollItensProps {
  data: IPostsProps;
  itemLeng: number;
}

export function ScrollItens({ data, itemLeng }: ScrollItensProps) {
  switch (itemLeng) {
    case 0:
    case 1:
      return (
        <section className="flex flex-auto mt-14 w-[50%] sm:px-10 md:w-[100%] md:flex-col md:justify-center md:items-center">
          <Card {...data} appearFrom="appearFromRight" />
        </section>
      );
    case 2:
      return (
        <section className="flex flex-auto mt-14 justify-end sm:px-10 md:flex-col md:justify-center md:items-center">
          <Card
            {...data}
            size="lg"
            classRoot="max-w-[75%] md:max-w-[100%]"
            appearFrom="appearFromLeft"
          />
        </section>
      );
    case 3:
    case 4:
      return (
        <section className="flex flex-auto mt-14 w-[50%] sm:px-10 md:w-[100%] md:flex-col md:justify-center md:items-center">
          <CardImgRight {...data} appearFrom="appearFromLeft" />
        </section>
      );
    case 5:
      return (
        <section className="flex flex-auto mt-14 sm:px-10 md:flex-col md:justify-center md:items-center">
          <Card
            {...data}
            size="lg"
            classRoot="max-w-[75%] md:max-w-[100%]"
            appearFrom="appearFromRight"
          />
        </section>
      );
    default:
      return <>Salve</>;
  }
}
