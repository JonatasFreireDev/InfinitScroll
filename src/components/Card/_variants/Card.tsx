import {
  Card as CardComponent,
  ICardContent,
  ICardImage,
  ICardRoot,
} from "../_components";

export interface ICard
  extends Omit<ICardRoot, "children">,
    ICardImage,
    ICardContent {}

export function Card({ imageUrl, size, author, article, title, id }: ICard) {
  return (
    <CardComponent.Root size={size}>
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
