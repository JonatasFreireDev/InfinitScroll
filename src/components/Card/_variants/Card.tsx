import {
  Card as CardComponent,
  ICardContent,
  ICardImage,
  ICardRoot,
} from "../_components";

export interface ICard
  extends Omit<ICardRoot, "children" | "className">,
    ICardImage,
    ICardContent {
  classRoot?: string;
}

export function Card({
  imageUrl,
  size,
  author,
  appearFrom,
  article,
  title,
  id,
  classRoot,
}: ICard) {
  return (
    <CardComponent.Root
      size={size}
      className={classRoot}
      appearFrom={appearFrom}
    >
      <CardComponent.Image imageUrl={imageUrl} title={title} />
      <CardComponent.Content
        id={id}
        author={author}
        article={article}
        title={title}
      />
    </CardComponent.Root>
  );
}
