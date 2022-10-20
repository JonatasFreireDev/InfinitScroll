import {
  Card as CardComponent,
  ICardContent,
  ICardImage,
  ICardRoot,
} from "../_components";

import { formatDate } from "../../../utils/date";
import { useMemo } from "react";

export interface IBigCard
  extends Omit<ICardRoot, "children">,
    ICardImage,
    ICardContent {
  date: string;
}

export function BigCard({ imageUrl, author, title, date }: IBigCard) {
  const newDate = useMemo(() => formatDate(date), [date]);

  return (
    <CardComponent.Root size="lg">
      <CardComponent.Image imageUrl={imageUrl} title={title} />
      <section className="flex justify-center w-[50%] flex-col m-auto mx-12 lg:w-full lg:items-center lg:mx-0 lg:mt-12">
        <span className="font-sm text-xs text-blue-800">{newDate}</span>
        <span className="font-sm text-sm text-gray-500 my-4">{author}</span>
        <h2 className="font-lg text-lg text-orange-200">{title}</h2>
      </section>
    </CardComponent.Root>
  );
}
